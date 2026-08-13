# Novelty field heterogeneity check

## Summary

A novelty field heterogeneity check tests whether novelty effects are stable across disciplines or whether pooled estimates hide field-specific evaluation and citation dynamics.

## Canonical Form

- Unit of analysis: paper, novelty class, field, subfield, subject category, or citation outcome.
- Typical representation: field-stratified coefficients, discipline-specific predicted probabilities, or robustness table by broad field.
- Validation target: determine whether novelty-impact and novelty-bias conclusions are universal, field-specific, or sample-size dependent.
- Empirical signature: some novelty effects remain stable across fields while others weaken, disappear, or reverse in smaller or differently paced fields.

## Uses in Science of Science

- Adds field-level validation to [novelty penalty](../mechanisms/novelty_penalty.md), [novelty impact dispersion](../measures/novelty_impact_dispersion.md), and [journal impact factor novelty bias](journal_impact_factor_novelty_bias.md).
- Complements [field-specific indicator suites](../methods/field_specific_indicator_suites.md) and [field-classification sensitivity](field_classification_sensitivity.md).
- Helps decide whether citation-window and novelty indicators should be calibrated by discipline.
- Pairs with [subfield citation inequality heterogeneity](subfield_citation_inequality_heterogeneity.md) as a general warning against overinterpreting pooled citation results.

## Operationalization

- Define field groups or subject categories before estimating novelty effects.
- Re-estimate the main novelty models separately by field group or include novelty-by-field interactions.
- Compare mean citation, dispersion, top-percentile, journal-placement, and short-window outcomes across fields.
- Report field sample sizes and whether insignificant effects could reflect low power in smaller fields.
- Check whether field-specific conclusions depend on the field taxonomy.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) performs separate novelty analyses by broad scientific discipline in Appendix II.
- The paper groups papers into life sciences, physical sciences and engineering, and social sciences, with additional splits for medicine and computer science/engineering.
- Wang et al. report that the higher dispersion of citations for novel papers holds across fields except social sciences, where the difference is not significant.
- They also report that highly novel papers are more likely to be top-1% cited under the long citation window in all subfields.
- The lower journal impact factor association is less robust in smaller fields such as applied physical sciences/engineering and social sciences.
- Under a short three-year window without controlling for journal impact factor, no scientific field shows a significant top-1% advantage for novel papers.

## Caveats

- Field-stratified models can be underpowered in small disciplines or sparse novelty tails.
- Broad fields can still hide subfield citation customs and source-coverage differences.
- Field robustness depends on the field classification system and on whether papers can belong to multiple subject categories.
- A field-specific null result should not be read as proof that novelty has no effect without checking sample size and outcome prevalence.

## Links

- [novelty penalty](../mechanisms/novelty_penalty.md)
- [novelty impact dispersion](../measures/novelty_impact_dispersion.md)
- [novelty short-window undercount](novelty_short_window_undercount.md)
- [journal impact factor novelty bias](journal_impact_factor_novelty_bias.md)
- [field-specific indicator suites](../methods/field_specific_indicator_suites.md)
- [field-classification sensitivity](field_classification_sensitivity.md)
- [field classifications](../measures/field_classifications.md)
- [subfield citation inequality heterogeneity](subfield_citation_inequality_heterogeneity.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `novelty_field_heterogeneity_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: field-stratified novelty robustness; novelty field heterogeneity; discipline-specific novelty effects; cross-field novelty validation
