# Altmetric active universe

## Summary

The altmetric active universe is the subset of publications with at least one tracked altmetric event, used as a restricted comparison set when analysts want to study source intensity among papers that have already entered provider coverage.

## Canonical Form

- Unit of analysis: paper, DOI-bearing paper set, provider snapshot, field, source channel, or active-paper subset.
- Typical representation: all-eligible universe versus active-universe split, tight-analysis sample, nonzero-event subset, or active-source denominator.
- Method target: distinguish analyses of all eligible publications from analyses conditional on observed altmetric presence.
- Empirical signature: correlations, precision-recall curves, and source distributions may change when zero-event papers are excluded.

## Uses in Science of Science

- Provides a denominator choice for [altmetric-citation association](../validations/altmetric_citation_association.md).
- Makes [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md) explicit by separating zero-event papers from the source-active subset.
- Supports [altmetric field presence profiles](../measures/altmetric_field_presence_profiles.md) when field differences in nonzero event rates are large.
- Helps test whether weak altmetric-citation relationships are caused mainly by sparse source coverage or by weak relationships among active papers.

## Operationalization

- Define the all-eligible publication universe by year, DOI/identifier rules, source database, and field.
- Apply [altmetric publication-month filtering](altmetric_publication_month_filter.md) before the active-universe split when the provider collection window begins inside the year.
- Define the active universe as papers with at least one tracked altmetric event in the provider snapshot.
- State the [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md) behind the active-universe filter.
- Run key analyses in both universes and report how correlations, precision, recall, and source distributions change.
- Keep the active universe label visible; do not generalize active-universe results to all scholarly outputs.

## Evidence and Validations

- Verified full-text evidence from Costas, Zahedi, and Wouters (2015) runs a tight analysis restricted to publications from July 2011 onward that had at least one altmetric score.
- The motivation is that 55% of top-1% highly cited publications in the full population had no altmetric events, limiting recall in the all-publication universe.
- Costas et al. find only marginal improvements in the relationship between altmetrics and impact indicators in the active-universe analysis, so sparse coverage does not fully explain weak citation associations.
- The tight analysis also reduces some risk that papers lacking early online-first month information are treated as zero-attention records.
- The same Costas et al. design motivates treating [online-first altmetric timing lag](../validations/online_first_altmetric_timing_lag.md) as a remaining limitation even after publication-month filtering.

## Caveats

- Restricting to active papers changes the estimand from coverage of all publications to intensity among provider-detected publications.
- Active-universe results can overstate altmetric usefulness for evaluation because they omit papers with no tracked attention.
- The active subset is source-list and snapshot dependent.

## Links

- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md)
- [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md)
- [altmetric field presence profiles](../measures/altmetric_field_presence_profiles.md)
- [altmetric attention timing windows](altmetric_attention_timing_windows.md)
- [altmetric publication-month filter](altmetric_publication_month_filter.md)
- [online-first altmetric timing lag](../validations/online_first_altmetric_timing_lag.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md)
- [altmetric composite scores](../measures/altmetric_composite_scores.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `altmetric_active_universe`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Costas et al. (2015) (2015)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Dimensions ID: `pub.1001115574`
- SciSciNet ID: `W2164277894`
- Aliases: tight altmetric analysis; nonzero altmetric subset; active altmetric universe; altmetric-positive paper set
