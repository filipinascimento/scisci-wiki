# Review-paper peak-impact sensitivity

## Summary

Checks whether personal-best impact strata and top-paper timing are artifacts of highly cited review articles.

## Canonical Form

- Unit of analysis: author top paper, review label, career-impact stratum, or random-impact test.
- Typical representation: career-impact results with and without review papers.
- Mechanism, measurement, or validation target: sensitivity of peak-impact claims to review articles.
- Empirical signature: personal-best strata and sequence-position results persist after excluding reviews..

## Uses in Science of Science

- Adds a document-type audit to [maximum-impact career strata](../representations/maximum_impact_career_strata.md).
- Useful for author-level career models where reviews can dominate citation profiles.
- Connects career-impact measures to responsible metric use.

## Operationalization

- Label review papers and recompute `c10*` strata and random-impact tests with and without them.
- Report review-label source and classification uncertainty.
- Inspect whether highly cited reviews drive top-paper timing in specific fields.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) notes that personal-best impact strata cutoffs survive review exclusion.
- This supports review-paper sensitivity as a validation motif.

## Caveats

- Review labels are noisy, and reviews can be genuine scholarly contributions.
- Review exclusion can remove important synthesis work in some fields.

## Links

- [Maximum-impact career strata](../representations/maximum_impact_career_strata.md)
- [Citation impact indicators](../measures/citation_impact_indicators.md)
- [Review-article out-degree-tail caveat](review_article_outdegree_tail_caveat.md)
- [Citation window selection](../methods/citation_window_selection.md)
- [Responsible metrics](../measures/responsible_metrics.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `review_paper_peak_impact_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: review top-paper sensitivity; review exclusion career impact audit; peak-impact review-paper check
