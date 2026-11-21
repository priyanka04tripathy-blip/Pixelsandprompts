# Side Hustle Scout

A daily research agent that finds, scores, tests and emails side hustles for talking-head videos.

- `AGENT.md`: the agent's full instructions (filters, scoring, verification protocol, email formats)
- `library/`: every hustle ever found, with an `INDEX.md` for de-duplication
- `samples/`: real sample deliverables from each dry-run

## How it runs
A scheduled task fires once a day, follows `AGENT.md`, commits new library entries, and emails the digest.
- Mon / Wed / Fri: Verified Drop (full hustle plus video brief)
- Tue / Thu / Sat / Sun: Radar (3 candidates in the pipeline)

## Honesty limits
- The agent verifies demand using web search and any pages it can open. It cannot earn money or open accounts, so income numbers are always projected.
- Every claim carries a tag: `[VERIFIED-PAGE]`, `[SNIPPET]`, `[VENDOR-CLAIM]` or `[UNVERIFIED]`.
- Some sites (Reddit, Google Trends, Fiverr, YouTube) are blocked by the cloud sandbox's network policy. Allowing them in the environment settings would make the demand checks much stronger.
