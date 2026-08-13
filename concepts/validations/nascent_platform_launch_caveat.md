# Nascent platform launch caveat

## Summary

Nascent platform launch caveat is the validation motif that newly launched social or web platforms can have unstable adoption, exposure, and collection windows that make early altmetric associations hard to interpret.

## Canonical Form

- Unit of analysis: platform, source launch date, collection window, paper cohort, altmetric count, or association test.
- Typical representation: new-platform exposure, launch-period caveat, source maturity flag, or early-adoption instability.
- Validation target: avoid interpreting weak or unstable source associations without accounting for platform age.
- Empirical signature: a platform's short history or changing adoption limits the meaningfulness of source-citation comparisons.

## Uses in Science of Science

- Adds platform-age scope to [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md).
- Helps explain [altmetric temporal correlation reversal](altmetric_temporal_correlation_reversal.md).
- Supports source-specific interpretation of [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md).

## Operationalization

- Record platform launch date, provider collection start, and API or scraping coverage start.
- Stratify analyses by platform maturity and paper exposure window.
- Exclude or flag cohorts that predate meaningful platform adoption.
- Report source age alongside source coverage.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) discusses weak Google+ results in the context of the platform's newness and limited evidence.
- The paper's source-by-source results show that platform maturity affects interpretation of altmetric associations.

## Caveats

- One weak source result may be idiosyncratic rather than a launch-period effect.
- Platform maturity can interact with user demographics and provider collection quality.
- Later platform shutdowns can also distort historical coverage.

## Links

- [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md)
- [altmetric temporal correlation reversal](altmetric_temporal_correlation_reversal.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `nascent_platform_launch_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: new-platform altmetric caveat; platform launch exposure bias; source maturity validation caveat
