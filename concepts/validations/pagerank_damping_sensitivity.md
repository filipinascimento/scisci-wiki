# PageRank damping sensitivity

## Summary

PageRank damping sensitivity checks how citation PageRank results change when the random-walk continuation or reinjection parameter is varied.

## Canonical Form

- Unit of analysis: PageRank parameter, paper rank, citation network, or ranked-candidate set.
- Typical representation: rank correlation, top-k overlap, or local rank changes across damping values.
- Validation target: robustness of recursive citation ranking to the damping parameter.
- Empirical signature: global ranks remain highly correlated while some local ordering changes as the parameter shifts.

## Uses in Science of Science

- Validates [citation PageRank](../measures/citation_pagerank.md), [Google number](../measures/google_number.md), and related random-walk citation metrics.
- Helps distinguish stable [citation PageRank hidden gems](citation_pagerank_hidden_gems.md) from artifacts of one arbitrary parameter choice.
- Connects recursive ranking to [responsible metrics](../measures/responsible_metrics.md) because parameter choices should be documented before evaluation use.

## Operationalization

- Choose a baseline damping or reinjection parameter, documenting any [citation-following damping calibration](../methods/citation_following_damping_calibration.md).
- Recompute PageRank over a meaningful parameter grid.
- Compare ranks using Spearman correlation, top-k overlap, and inspection of substantive outliers.
- Check [PageRank citation-rank limit](pagerank_citation_rank_limit.md) at high reinjection values and [time-directed citation-walk drift](../mechanisms/time_directed_citation_walk_drift.md) at long-walk settings.
- Report any parameter ranges where conclusions, hidden-gem lists, or field comparisons materially change.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) asks whether Google rankings are robust to the free parameter `d`.
- They compare their citation-network choice of `d = 0.5` against the original Google-style value `d = 0.15` and find little global reordering despite local rank changes.
- The paper reports Spearman correlations between PageRank at different `d` values and PageRank at `d = 0.5`, with correlations between 0.98 and 1 for `0.1 < d < 0.9`.
- Chen et al. also show that high `d` approaches citation-rank behavior, while small `d` increases the age drift of random walks on time-directed citation networks.

## Caveats

- High global rank correlation can hide meaningful changes among top-k candidates or boundary cases.
- The appropriate parameter can depend on citation-chain behavior, field age, database coverage, and whether the task is search, mapping, or evaluation.
- Damping sensitivity should be paired with age-bias and coverage checks.

## Links

- [citation PageRank](../measures/citation_pagerank.md)
- [Google number](../measures/google_number.md)
- [citation-following damping calibration](../methods/citation_following_damping_calibration.md)
- [PageRank citation-rank limit](pagerank_citation_rank_limit.md)
- [time-directed citation-walk drift](../mechanisms/time_directed_citation_walk_drift.md)
- [citation PageRank hidden gems](citation_pagerank_hidden_gems.md)
- [PageRank age-bias check](pagerank_age_bias_check.md)
- [Physical Review citation network](../datasets/physical_review_citation_network.md)
- [recursive citation weighting](../mechanisms/recursive_citation_weighting.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]

## Metadata

- Concept ID: `pagerank_damping_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: PageRank parameter sensitivity; damping-factor robustness; PageRank d sensitivity; random-walk parameter audit
