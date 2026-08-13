# Reference-popularity search

## Summary

Reference-popularity search measures whether a focal work builds on highly cited, visible predecessors or on less popular prior work.

## Canonical Form

- Unit of analysis: focal paper, patent, repository, team, field, or cohort.
- Typical representation: median citations to references, reference-popularity percentile, unpopular-reference share, or top-reference-popularity indicator.
- Measurement target: visibility and mainstream status of the prior work being used.
- Empirical signature: focal work cites predecessors with systematically high or low prior citation counts.

## Uses in Science of Science

- Complements [reference-age search depth](reference_age_search_depth.md): work can cite old classics, recent hits, or neglected older material.
- Supports the organizational mechanism in [team size and disruption](../mechanisms/team_size_disruption.md).
- Helps separate citation impact from disruptive contribution in [responsible metrics](responsible_metrics.md).
- Provides a bridge between [attention inequality](../mechanisms/attention_inequality.md), [novelty and conventionality](../mechanisms/novelty_conventionality.md), and [disruption index](disruption_index.md).
- Park et al. (2023) refine popularity search through concentration in the [top-cited predecessor concentration](top_cited_predecessor_concentration.md) tail.

## Operationalization

- For each cited reference, compute citations received before the focal work appears.
- Summarize the cited-reference distribution with median popularity, percentile ranks, or shares in high/low tails.
- Normalize by cited-reference field, age, document type, and database coverage when possible.
- Compare reference popularity by team size, funding status, field, cohort, or disruption percentile.

## Evidence and Validations

- Verified full-text evidence from Wu et al. (2019) measures search popularity as median citations to the references of a focal work.
- Wu et al. report that large teams more often target recent, high-impact work as their source of inspiration, while solo authors and small teams more often build on older and less popular ideas.
- Their full text shows that reference popularity increases with team size across papers, patents, and software repositories.
- The same paper links high reference popularity to faster attention, because large-team work is immediately relevant to active audiences around visible predecessors.
- Verified full-text evidence from Park et al. (2023) reports that papers and patents increasingly cite the same highly cited previous work.
- Park et al. operationalize this as a rising share of citations to the top 1 percent most cited papers and patents within field and year.

## Caveats

- Popularity is path-dependent: highly cited predecessors can be genuinely important, fashionable, or simply easier to find.
- Prior citation counts need a pre-focal cutoff to avoid leakage from future attention.
- Database coverage can make older or cross-domain predecessors look artificially unpopular.

## Links

- [reference-age search depth](reference_age_search_depth.md)
- [small-team deep-search delay](../mechanisms/small_team_deep_search_delay.md)
- [team-size breadth-depth search tradeoff](../mechanisms/team_size_breadth_depth_search_tradeoff.md)
- [top-cited predecessor concentration](top_cited_predecessor_concentration.md)
- [cited work diversity](cited_work_diversity.md)
- [cited predecessor semantic diversity](cited_predecessor_semantic_diversity.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [disruption index](disruption_index.md)
- [responsible metrics](responsible_metrics.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]
- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `reference_popularity_search`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: search popularity; cited-reference popularity; median reference citations; popular predecessor search
