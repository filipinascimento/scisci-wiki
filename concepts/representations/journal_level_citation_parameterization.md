# Journal-level citation parameterization

## Summary

Journal-level citation parameterization represents journal cohorts through analogs of paper-level fitness, immediacy, and longevity so changes in journal impact can be decomposed into durable impact and timing effects.

## Canonical Form

- Unit of analysis: journal, journal-year cohort, article portfolio, or citation trajectory aggregate.
- Typical representation: journal fitness, journal immediacy, journal longevity, or parameterized impact-factor trajectory.
- Representation target: translate paper-level citation dynamics into journal-level cohort summaries.
- Empirical signature: journal impact-factor shifts can be attributed to changes in fitted distributional parameters.

## Uses in Science of Science

- Extends [journal impact-time shift](../validations/journal_impact_time_shift.md).
- Interprets [impact-factor citation-window share](../measures/impact_factor_citation_window_share.md).
- Links [journal impact factor](../measures/journal_impact_factor.md) to fitted citation dynamics.
- Connects to [journal fitness distribution](../measures/journal_fitness_distribution.md).

## Operationalization

- Group papers by journal and publication year.
- Fit paper-level citation parameters and summarize their journal-level distributions.
- Decompose short-window impact changes into fitness, immediacy, and longevity components.
- Compare journals with similar impact factors but different timing profiles.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2013) connects impact factor to journal-level analogs of fitness, immediacy, and longevity.
- The paper decomposes Cell and NEJM impact-factor trajectories using these parameters.
- Its figure text labels journal time-dependent longevity, fitness, and immediacy as separate components.

## Caveats

- Journal-level summaries can hide skewed paper-level distributions.
- Journal editorial scope changes can alter parameter distributions.
- The method should not be used to assign journal-level averages to individual papers.

## Links

- [journal impact-time shift](../validations/journal_impact_time_shift.md)
- [impact-factor citation-window share](../measures/impact_factor_citation_window_share.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [journal fitness distribution](../measures/journal_fitness_distribution.md)
- [journal-metric article-level misuse](../validations/journal_metric_article_level_misuse.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; SciSciNet: W2124689612; WoS: unknown]

## Metadata

- Concept ID: `journal_level_citation_parameterization`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: journal citation parameter vector; journal fitness-immediacy-longevity model; impact-factor parameterization
