# Rolling replication article-pool assignment

## Summary

Rolling replication article-pool assignment releases small batches of eligible source articles to replication teams over time, balancing quasi-random selection against the need to match studies with available expertise and resources.

## Canonical Form

- Unit of analysis: eligible source article, replication team, article pool, journal frame, feasibility screen, or assignment wave.
- Typical representation: rolling pool, claim queue, eligibility log, unclaimed-article list, or team-study matching record.
- Method target: reduce cherry-picking in a large replication project while still allowing feasible and expert replications.
- Empirical signature: teams choose from a limited current pool, new articles are released when earlier ones become difficult to match, and unclaimed or infeasible studies are tracked.

## Uses in Science of Science

- Refines the [2008 psychology journal replication sampling frame](../datasets/psychology_reproducibility_sampling_frame.md) with an operational assignment mechanism.
- Helps distinguish sampling-frame design from [replication feasibility attrition](../validations/replication_feasibility_attrition.md).
- Supports [direct replication protocol](direct_replication_protocol.md) by making study assignment auditable before replication data are collected.
- Provides a reusable design for multi-lab replication, audit, and benchmark projects where expertise matching cannot be fully randomized.
- Complements [focal-effect replication selection](focal_effect_replication_selection.md), which governs the selected effect after an article is assigned.

## Operationalization

- Define the full source-article frame and journal or field strata before assignment begins.
- Release a small initial pool of eligible articles to interested replication teams.
- Add new article batches only when the remaining pool becomes hard to match or additional teams are available.
- Track which articles are selected, unclaimed, infeasible, claimed but unfinished, and completed.
- Document team expertise, resource constraints, and active recruitment for difficult articles.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) states that the first replication teams could select from the first 20 articles from each journal.
- The paper reports that project coordinators facilitated matching articles to teams by interests and expertise until remaining articles were difficult to match.
- If interested teams remained, another 10 articles from one or more journals were made available from the sampling frame.
- The design is explicitly described as balancing two goals: minimizing selection bias through small available pools and matching studies with team interests, resources, and expertise.

## Caveats

- Rolling assignment is not full randomization; team interest, feasibility, and expertise still affect inclusion.
- Hard-to-match studies may remain underrepresented even with active recruitment.
- Later waves can differ from earlier waves if team availability, resources, or project deadlines change.

## Links

- [2008 psychology journal replication sampling frame](../datasets/psychology_reproducibility_sampling_frame.md)
- [direct replication protocol](direct_replication_protocol.md)
- [focal-effect replication selection](focal_effect_replication_selection.md)
- [replication feasibility attrition](../validations/replication_feasibility_attrition.md)
- [replication success indicator suite](../measures/replication_success_indicator_suite.md)
- [open science interventions](../validations/open_science_interventions.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `rolling_replication_article_pool_assignment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: rolling replication pool; article-pool assignment; staged replication assignment; replication study matching queue
