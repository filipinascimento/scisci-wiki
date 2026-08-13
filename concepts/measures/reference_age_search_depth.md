# Reference-age search depth

## Summary

Reference-age search depth measures how far back in the literature a paper, patent, team, or software project reaches when building on prior work.

## Canonical Form

- Unit of analysis: focal paper, patent, repository, team, field, or cohort.
- Typical representation: average or median age of cited references, relative reference age, old-reference share, or top-old-reference indicator.
- Measurement target: depth of search into older prior work.
- Empirical signature: focal work cites older-than-expected references after accounting for field, year, and data source.

## Uses in Science of Science

- Operationalizes the search-depth mechanism in [team size and disruption](../mechanisms/team_size_disruption.md).
- Helps distinguish frontier-expanding work from development around recent visible work.
- Links [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md), [sleeping beauty](../mechanisms/sleeping_beauty.md), and [disruption index](disruption_index.md).
- Provides a covariate for models of delayed recognition and [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md).
- Evans (2008) uses average historical depth of citations to test [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md).
- Evans also adds [title-word age recency control](../methods/title_word_age_recency_control.md) to separate shorter reference age from the possibility that citing papers discuss newer concepts.
- Park et al. (2023) use mean age of cited work as a narrowing proxy for [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md).

## Operationalization

- Extract references or dependencies for each focal item.
- Compute cited-reference age as focal publication year minus cited item publication year.
- For archive-access questions, compare reference age against [online backfile depth](online_backfile_depth.md) in the previous year.
- Add topic-age controls when reference age could shift because the citing literature itself has become topically newer.
- Normalize by field, year, document type, or source type when comparing across domains.
- Summarize by mean, median, percentile, or share of references in the oldest tail.
- Pair with [reference-popularity search](reference_popularity_search.md) to separate old-but-canonical references from old-and-neglected references.

## Evidence and Validations

- Verified full-text evidence from Evans (2008) measures citation depth as the years between citing articles and the work they reference.
- Evans reports that an additional 15 years of online journal availability predicts average reference age falling from about 5.6 years to less than 4.5 years, or 0.088 years for each additional online year available.
- Verified full-text evidence from Wu et al. (2019) measures search depth as the average relative age of cited references for papers, patents, and software repositories.
- Wu et al. report that solo authors and small teams more often build on older ideas, while large teams more often build on recent developments.
- Wu et al. also fit team-size-specific reference-age and reference-popularity distributions, now represented as [team-size reference-distribution scaling](team_size_reference_distribution_scaling.md).
- Their full text links greater search depth to disruption and delayed recognition: smaller teams search deeper, receive citations more slowly, and can later feed large-team development.
- The paper validates the team-size pattern across papers, patents, and software, with bootstrapped uncertainty and robustness checks across team-size ranges.
- Verified full-text evidence from Park et al. (2023) reports that the mean age of cited work is increasing for papers and patents.
- Park et al. use older cited work as one of three proxies for narrower use of previous knowledge and report that using older work is negatively associated with disruption.

## Caveats

- Older references can be foundational, obsolete, or ceremonial; age alone does not indicate exploratory search.
- Reference-age distributions differ sharply by field, database coverage, and citation norms.
- A narrow set of old classics can raise search depth without broadening the actual search space.

## Links

- [team size and disruption](../mechanisms/team_size_disruption.md)
- [small-team deep-search delay](../mechanisms/small_team_deep_search_delay.md)
- [team-size breadth-depth search tradeoff](../mechanisms/team_size_breadth_depth_search_tradeoff.md)
- [team-size reference-distribution scaling](team_size_reference_distribution_scaling.md)
- [reference-popularity search](reference_popularity_search.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md)
- [online backfile depth](online_backfile_depth.md)
- [title-word age recency control](../methods/title_word_age_recency_control.md)
- [cited work diversity](cited_work_diversity.md)
- [top-cited predecessor concentration](top_cited_predecessor_concentration.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [disruption index](disruption_index.md)
- [responsible metrics](responsible_metrics.md)

## References

- Evans, J. A. (2008). Electronic publication and the narrowing of science and scholarship. *Science*, 321(5887), 395-399. https://doi.org/10.1126/science.1150473 [OpenAlex: W2125660293; Dimensions: pub.1062457136; WoS: unknown]
- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]
- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `reference_age_search_depth`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Evans (2008) (2008)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: search depth; reference age; old-reference search; depth into past work
