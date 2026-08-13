# Subfield Self-Citation Ratio Heterogeneity

## Summary

Subfield self-citation ratio heterogeneity measures dispersion and reversals in group self-citation ratios across nested fields and subfields rather than relying only on pooled field averages.

## Canonical Form

- Unit of analysis: field, subfield, gender group, self-citation rate ratio, or nested classification node.
- Typical representation: field-level ratio with subfield scatter, ratio distribution, reversal flag, or confidence-interval panel.
- Measurement target: heterogeneity in self-citation gaps across disciplinary structure.
- Empirical signature: a pooled field ratio masks subfields where the gap is larger, smaller, statistically uncertain, or reversed.

## Uses in Science of Science

- Makes [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md) field-structure aware.
- Uses [hierarchical map-equation field classification](../methods/hierarchical_map_equation_field_classification.md) to expose nested disciplinary heterogeneity.
- Complements [self-citation bootstrap ratio intervals](../methods/self_citation_bootstrap_ratio_intervals.md) by showing where subfield ratios are sparse or uncertain.
- Provides a descriptive basis for [field gender-composition self-citation threshold check](../validations/field_gender_composition_self_citation_threshold_check.md).

## Operationalization

- Assign papers or authorships to fields and subfields with a documented classification method.
- Compute group-specific self-citation rates within each field and subfield.
- Express gaps as a ratio, such as men's self-citation rate divided by women's self-citation rate.
- Plot or tabulate field-level ratios together with subfield ratios and uncertainty intervals.
- Flag subfields where the pooled direction reverses or where sample sizes make ratios unstable.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) reports that self-citation behavior varies widely across fields and subfields.
- The paper shows ratios of men's to women's self-citation rates for the 16 largest fields and their nested subfields using a hierarchical map-equation classification.
- King et al. note that some subfields fall above the parity line in the opposite direction, with women self-citing more on average than men in those subfields.
- The authors provide an interactive field and subfield visualization so readers can inspect the heterogeneity directly.

## Caveats

- Subfield ratios can be unstable when one group has few authorships or self-citation events.
- Ratios can hide absolute-rate differences when both numerator and denominator are small.
- Classification resolution, field labels, and database coverage shape the apparent heterogeneity.

## Links

- [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md)
- [hierarchical map-equation field classification](../methods/hierarchical_map_equation_field_classification.md)
- [self-citation bootstrap ratio intervals](../methods/self_citation_bootstrap_ratio_intervals.md)
- [field gender-composition self-citation threshold check](../validations/field_gender_composition_self_citation_threshold_check.md)
- [JSTOR network dataset](../datasets/jstor_network_dataset.md)
- [self-citation rates](self_citation_rates.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 1-22. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown; SciSciNet: W3104836124]

## Metadata

- Concept ID: `subfield_self_citation_ratio_heterogeneity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: King et al. (2017) (2017)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: self-citation ratio heterogeneity; gendered self-citation subfield dispersion; subfield self-citation reversals; field self-citation ratio spread
