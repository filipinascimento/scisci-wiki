# Small-team deep-search delay

## Summary

Small-team deep-search delay is the mechanism in which small teams draw more often on older and less popular predecessors, generating work that may be disruptive but slower to receive attention.

## Canonical Form

- Unit of analysis: paper, patent, software project, reference list, team-size bin, citation trajectory, or field-year cohort.
- Typical representation: reference-age curves, reference-popularity curves, top-old-reference ratios, and delayed-recognition metrics by team size.
- Mechanism: small groups search deeper into neglected or older knowledge, while large teams search nearer to recent and already visible predecessors.
- Empirical signature: smaller teams cite older or less popular work and show higher delayed-recognition signals.

## Uses in Science of Science

- Explains one route through which [team size and disruption](team_size_disruption.md) can arise without requiring small teams to have more resources.
- Connects search behavior to [reference-age search depth](../measures/reference_age_search_depth.md), [reference-popularity search](../measures/reference_popularity_search.md), and [sleeping beauty](sleeping_beauty.md).
- Extends predecessor-search analysis from papers and patents to software through the [GitHub fork-citation network](../representations/github_fork_citation_network.md).
- Provides a bridge between disruptive work and later consolidation by larger teams through [disruption consolidation](disruption_consolidation.md).

## Operationalization

- Compute the average or relative age of references in a focal work.
- Compute predecessor popularity from citation counts, fork counts, or another domain-specific attention measure.
- Compare average search depth, average search popularity, and extreme old/unpopular predecessor shares by team-size bin.
- Keep predecessor-edge semantics explicit when comparing paper citations, patent applicant citations, and fork-derived software links.
- Add delayed-recognition measures such as the [beauty coefficient](../measures/beauty_coefficient.md), awakening time, or Sleeping Beauty index where citation histories are long enough.

## Evidence and Validations

- Verified full-text evidence from Wu, Wang, and Evans (2019) defines search depth as the average relative age of cited references and search popularity as the median citations those references received.
- Across WOS articles, USPTO patents, and GitHub repositories, reference popularity rises with team size while reference age falls with team size.
- In WOS articles, 7.2% of the top 5% oldest-reference articles are contributed by single authors and 1.6% by ten-author teams, corresponding to relative ratios of 1.44 and 0.32 against a uniform baseline.
- Wu et al. report that the Sleeping Beauty index percentile decreases markedly with team size and increases with disruption, implying slower recognition for the deeper-search side of the team-size gradient.
- Their separate combinatorial-novelty analysis is split out as [team-size breadth-depth search tradeoff](team_size_breadth_depth_search_tradeoff.md), distinguishing deep use of neglected predecessors from broad recombination across sources.

## Caveats

- Older references are not always conceptually distant or neglected, and recent references are not always incremental.
- Delayed recognition can be caused by visibility, field size, publication venue, or measurement-window limits.
- Software forks and patent applicant citations encode different predecessor relations from scholarly references.

## Links

- [team size and disruption](team_size_disruption.md)
- [WOS-patent-GitHub disruption corpus](../datasets/wos_patent_github_disruption_corpus.md)
- [GitHub fork-citation network](../representations/github_fork_citation_network.md)
- [team-size disruption-impact tail divergence](../validations/team_size_disruption_impact_tail_divergence.md)
- [team-size breadth-depth search tradeoff](team_size_breadth_depth_search_tradeoff.md)
- [reference-age search depth](../measures/reference_age_search_depth.md)
- [reference-popularity search](../measures/reference_popularity_search.md)
- [sleeping beauty](sleeping_beauty.md)
- [beauty coefficient](../measures/beauty_coefficient.md)
- [awakening time](../measures/awakening_time.md)
- [disruption consolidation](disruption_consolidation.md)
- [knowledge-use narrowing](knowledge_use_narrowing.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]

## Metadata

- Concept ID: `small_team_deep_search_delay`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: small-team deep search; older less popular predecessor search; disruptive delayed recognition; team-size search-depth mechanism
