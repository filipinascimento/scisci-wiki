# Time-directed citation-walk drift

## Summary

Time-directed citation-walk drift is the mechanism by which random walks on citation networks tend to move backward toward older papers because citation links point from newer papers to older cited works.

## Canonical Form

- Unit of analysis: citation path, publication year, random walk, PageRank parameter, cited paper, or age cohort.
- Typical representation: year-profile of recursive score, average walk length, backward citation path, or age-adjusted random-walk model.
- Mechanism: static citation edges create one-way temporal paths, so longer random walks accumulate probability on older literature.
- Empirical signature: smaller reinjection probabilities or longer walks assign more relative weight to older publication cohorts.

## Uses in Science of Science

- Provides the mechanism behind [PageRank age-bias check](../validations/pagerank_age_bias_check.md).
- Links [citation PageRank](../measures/citation_pagerank.md) and [Google number](../measures/google_number.md) to broader [citation aging obsolescence](citation_aging_obsolescence.md) and citation-window choices.
- Motivates explicit aging terms or age-stratified baselines when recursive citation metrics are used for evaluation.
- Helps compare citation networks with web networks, where links can be updated after publication or page revision.

## Operationalization

- Represent citation edges as directed from citing papers to cited papers and attach publication years to nodes.
- Estimate average random-walk path length under the chosen PageRank or restart parameter.
- Plot recursive score by publication year and compare it with direct citation counts and field-normalized citation baselines.
- Test whether age-adjusted PageRank, restart rates, or cohort-normalized ranks change hidden-gem lists or evaluation conclusions.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) notes that long random walks on time-directed citation networks inevitably drift toward older papers.
- The paper states that this effect is especially pronounced for small `d`, because the average walk length is `1/d`.
- Chen et al. compare PageRank by publication year for several parameter values and find that smaller `d` gives more relative weight to papers published between 1920 and 1960.
- In the conclusion, they contrast static citation links with evolving web hyperlinks and suggest that explicit aging effects may be needed in PageRank-like citation algorithms.

## Caveats

- Older-paper weighting can reflect real durable influence as well as algorithmic drift.
- Citation-network start dates, missing early references, field citation half-lives, and database coverage affect the observed age profile.
- Age correction should be treated as a modeling choice, not as a universal improvement.

## Links

- [PageRank age-bias check](../validations/pagerank_age_bias_check.md)
- [citation PageRank](../measures/citation_pagerank.md)
- [Google number](../measures/google_number.md)
- [citation-following damping calibration](../methods/citation_following_damping_calibration.md)
- [PageRank damping sensitivity](../validations/pagerank_damping_sensitivity.md)
- [citation aging obsolescence](citation_aging_obsolescence.md)
- [citation window selection](../methods/citation_window_selection.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]

## Metadata

- Concept ID: `time_directed_citation_walk_drift`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: citation random-walk aging drift; backward citation-walk drift; time-directed PageRank drift; static citation-link aging
