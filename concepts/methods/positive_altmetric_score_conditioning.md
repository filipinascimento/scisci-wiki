# Positive altmetric-score conditioning

## Summary

Positive altmetric-score conditioning is the method choice to analyze only papers with at least one observed event in a source, rather than treating missing or zero provider records as true zeros.

## Canonical Form

- Unit of analysis: paper-source pair, positive provider record, source-specific active set, or analysis denominator.
- Typical representation: positive-only subset, source-active denominator, nonzero-score filter, or conditioning flag.
- Method target: avoid false zero altmetric values when the provider export is not a complete monitored universe.
- Empirical signature: results are reported for papers with observed source activity and are not generalized to zero-score papers without a separate denominator audit.

## Uses in Science of Science

- Turns [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md) into a concrete inclusion rule.
- Defines the active denominator for [altmetric-citation association](../validations/altmetric_citation_association.md) tests and [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md) reports.
- Complements [altmetric active universe](altmetric_active_universe.md), which asks what changes when the analysis is restricted to papers with any observed online attention.
- Protects source-specific analyses of [social media attention channels](../datasets/social_media_attention_channels.md) from implied zeros that were never actually monitored.

## Operationalization

- For each source, keep only papers with a source score greater than zero when the provider export cannot certify complete monitoring of the eligible paper universe.
- Record the source-specific denominator separately from all-paper, any-altmetric, and DOI-bearing denominators.
- Do not infer a zero in one source merely because a paper has a positive score in another source.
- Report the estimand explicitly: associations among papers with positive source activity, not among all eligible papers.
- Pair the conditioning choice with [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md) and a coverage audit before comparing sources.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) states that the Altmetric.com export was not a complete list of PubMed-ID articles; it included articles with a PubMed ID and at least one nonzero Altmetric.com score.
- Thelwall et al. discard zero-score records for each journal-source list because they could not control the data collection process and missing source matches could create false zeros.
- The paper explicitly rejects an implied-zero analysis in which a positive score in one source would imply reliable zero monitoring in all other sources.
- The resulting sign-test evidence is therefore limited to papers with positive altmetric scores in the tested source.

## Caveats

- Positive-only conditioning changes the estimand and cannot estimate coverage or all-paper effects by itself.
- It can overstate practical utility if most papers have no tracked source events.
- When a provider can certify complete monitoring of an independently defined publication universe, zero-as-count analysis may be more appropriate.

## Links

- [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md)
- [altmetric active universe](altmetric_active_universe.md)
- [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [altmetric coverage utility threshold](../measures/altmetric_coverage_utility_threshold.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `positive_altmetric_score_conditioning`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: positive-only altmetric denominator; nonzero altmetric conditioning; source-active altmetric subset; positive score filter
