# PageRank age-bias check

## Summary

PageRank age-bias check tests whether a recursive citation-ranking algorithm overweights older papers because random walks drift backward through time-directed citation links.

## Canonical Form

- Unit of analysis: publication year, PageRank score, citation network, damping parameter, or age cohort.
- Typical representation: average normalized PageRank by publication year, compared with normalized citation counts.
- Validation target: whether recursive ranking confounds influence with age or citation-network direction.
- Empirical signature: older cohorts receive higher average PageRank under long random-walk settings, especially when damping is small.

## Uses in Science of Science

- Adds an age-robustness layer to [citation PageRank](../measures/citation_pagerank.md), [Google number](../measures/google_number.md), and recursive citation indicators.
- Tests the empirical consequence of [time-directed citation-walk drift](../mechanisms/time_directed_citation_walk_drift.md).
- Complements [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md), [citation window selection](../methods/citation_window_selection.md), and [field normalized citation impact](../measures/field_normalized_citation_impact.md).
- Provides a responsible-metrics check before recursive citation scores are used for evaluation.

## Operationalization

- Compute PageRank on a time-directed citation network.
- Normalize PageRank and citation counts for comparability.
- Plot or tabulate average normalized PageRank by publication year or cohort.
- Repeat across damping-parameter values and compare with direct citation-count age profiles.
- Consider explicit age correction if older cohorts receive systematic excess weight.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) asks whether PageRank gives an unfair advantage to older papers.
- The paper notes that long random walks on time-directed citation networks drift toward older papers, and that this is more pronounced when the damping parameter is small.
- Chen et al. plot average normalized PageRank by publication year for multiple `d` values and report that for `d = 0.5` the age variation is comparable to citation counts, while smaller `d` values give more relative weight to papers from 1920-1960.
- The same conclusion contrasts static citation links with evolving web links and motivates explicit aging terms in citation PageRank variants.

## Caveats

- Age effects vary with field, citation half-life, database start date, and whether old references are fully covered.
- A flat average by year does not guarantee fairness across topics or document types.
- Age correction can remove legitimate long-run influence if applied mechanically.

## Links

- [citation PageRank](../measures/citation_pagerank.md)
- [Google number](../measures/google_number.md)
- [citation-following damping calibration](../methods/citation_following_damping_calibration.md)
- [PageRank damping sensitivity](pagerank_damping_sensitivity.md)
- [time-directed citation-walk drift](../mechanisms/time_directed_citation_walk_drift.md)
- [citation PageRank hidden gems](citation_pagerank_hidden_gems.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation window selection](../methods/citation_window_selection.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]

## Metadata

- Concept ID: `pagerank_age_bias_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: PageRank age bias; recursive-rank age check; citation PageRank aging audit; old-paper PageRank bias
