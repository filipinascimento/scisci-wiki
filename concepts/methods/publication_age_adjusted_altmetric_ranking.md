# Publication-age-adjusted altmetric ranking

## Summary

Publication-age-adjusted altmetric ranking is the method motif that search, display, or evaluation systems using altmetrics should compensate for publication age and platform uptake before ranking papers.

## Canonical Form

- Unit of analysis: paper, altmetric count, publication age, platform exposure, ranking score, or search result.
- Typical representation: age-normalized altmetric count, date-bin ranking, exposure offset, or platform-uptake correction.
- Method target: reduce timing bias when altmetrics are used to order or recommend articles.
- Empirical signature: article rankings change when counts are compared within publication-age bins or adjusted for source maturity.

## Uses in Science of Science

- Extends [altmetric attention timing windows](altmetric_attention_timing_windows.md) into ranking design.
- Responds to [altmetric temporal correlation reversal](../validations/altmetric_temporal_correlation_reversal.md).
- Connects to [nascent platform launch caveat](../validations/nascent_platform_launch_caveat.md).

## Operationalization

- Normalize source counts within publication-date bins or include age offsets in ranking models.
- Use platform-specific exposure windows and source launch dates.
- Report whether ranking is intended to privilege recency or long-run attention.
- Audit rank shifts under raw and age-adjusted counts.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) warns that comparisons among articles published at different times can remove or reverse altmetric-citation associations.
- The paper recommends considering the effect of time when using altmetrics to rank articles.

## Caveats

- Age adjustment may conflict with users who intentionally want current attention.
- Different altmetric sources have different lag profiles.
- Ranking corrections can be unstable for sparse sources.

## Links

- [altmetric attention timing windows](altmetric_attention_timing_windows.md)
- [altmetric temporal correlation reversal](../validations/altmetric_temporal_correlation_reversal.md)
- [nascent platform launch caveat](../validations/nascent_platform_launch_caveat.md)
- [altmetric prediction-claim boundary](../validations/altmetric_prediction_claim_boundary.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `publication_age_adjusted_altmetric_ranking`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: age-normalized altmetric ranking; publication-date adjusted online attention; altmetric exposure-adjusted ranking
