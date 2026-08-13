# Career-impact normalization branch

## Summary

Encodes the source-specific decision to use raw APS `c10` after checking conclusions are unchanged while using normalized citation counts for WoS.

## Canonical Form

- Unit of analysis: career-impact dataset, source branch, normalization rule, or paper citation outcome.
- Typical representation: source-specific branch between raw, year-normalized, and field-normalized `c10`.
- Mechanism, measurement, or validation target: portable documentation of citation-normalization choices in career models.
- Empirical signature: different sources use different citation normalization branches with explicit robustness checks..

## Uses in Science of Science

- Adds implementation detail to [APS-WoS career impact panel](../datasets/aps_wos_career_impact_panel.md).
- Connects [field normalized citation impact](../measures/field_normalized_citation_impact.md) to source-specific robustness.
- Useful when reproducing Q-model career prediction across datasets.

## Operationalization

- Compute raw, year-normalized, and field/subfield-normalized `c10`.
- Report which branch is used per source and why.
- Preserve the robustness result that permits a raw-count branch before reusing it.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) states that APS conclusions are unchanged by normalization and uses normalized citation counts for WoS.
- This supports recording a source-specific normalization branch.

## Caveats

- The raw-count branch is not portable without the same robustness result.
- Normalization can introduce its own field-classification and denominator choices.

## Links

- [Field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [Citation-normalization residual-bias stack](../validations/citation_normalization_residual_bias_stack.md)
- [APS-WoS career impact panel](../datasets/aps_wos_career_impact_panel.md)
- [Citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `career_impact_normalization_branch`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: career citation normalization branch; c10 normalization choice; source-specific impact normalization
