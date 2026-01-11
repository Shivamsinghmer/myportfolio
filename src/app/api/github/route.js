import { NextResponse } from 'next/server';

export async function GET() {
    const username = "ShivamSinghMer";
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
        return NextResponse.json({ error: "GitHub token not configured. Please add GITHUB_TOKEN to your .env file." }, { status: 500 });
    }

    const query = `
        query($username: String!) {
            user(login: $username) {
                contributionsCollection {
                    contributionCalendar {
                        totalContributions
                        weeks {
                            contributionDays {
                                contributionCount
                                date
                            }
                        }
                    }
                }
            }
        }
    `;

    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: { username },
            }),
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        const data = await response.json();

        if (data.errors) {
            return NextResponse.json({ error: data.errors[0].message }, { status: 400 });
        }

        const calendar = data.data.user.contributionsCollection.contributionCalendar;

        const getLevel = (count) => {
            if (count === 0) return 0;
            if (count < 3) return 1;
            if (count < 6) return 2;
            if (count < 10) return 3;
            return 4;
        };

        const contributions = calendar.weeks.flatMap(week =>
            week.contributionDays.map(day => ({
                date: day.date,
                count: day.contributionCount,
                level: getLevel(day.contributionCount)
            }))
        );

        return NextResponse.json({
            totalContributions: calendar.totalContributions,
            contributions
        });

    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 });
    }
}
