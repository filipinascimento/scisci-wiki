# Broad-domain pooled tail denominator

## Summary

Exceptional-impact analyses can pool outputs inside broad research areas before comparing solo and team citation-frequency distributions.

## Canonical Form

- Unit of analysis: broad domain, paper, patent, citation bin, solo/team flag, or citation-frequency ratio.
- Typical representation: pooled broad-domain citation-tail denominator split by team status.
- Mechanism, measurement, or validation target: denominator construction for team/solo exceptional-impact comparisons.
- Empirical signature: upper-tail team/solo ratios depend on broad-domain pooling and can differ from subfield-stratified estimates.

## Uses in Science of Science

- Refines citation-tail representation by linking it to [team solo citation frequency ratio](../measures/team_solo_citation_frequency_ratio.md) and [team high citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md).
- Useful as a reusable check when [subfield equal weight trend aggregation](../methods/subfield_equal_weight_trend_aggregation.md) is used in science-of-science inference.
- Creates cross-links to [citation distribution scaling](../measures/citation_distribution_scaling.md) so the motif is not interpreted in isolation.

## Operationalization

- Pool records inside each broad domain before constructing citation-frequency distributions.
- Split distributions by solo and team status and compute ratios across citation bins.
- Compare pooled-domain results with subfield-normalized or equal-weighted alternatives.

## Evidence and Validations

- Verified local full text from Wuchty et al. (2007) pools papers and patents within four broad research areas for exceptional-research comparisons.
- The pooled denominator underlies the displayed solo/team citation-frequency ratios.

## Caveats

- Broad pooling can hide subfield composition effects and field-specific citation density.
- Fixed citation thresholds such as 1,000 citations are not equally selective across fields.

## Links

- [Team-solo citation-frequency ratio](../measures/team_solo_citation_frequency_ratio.md)
- [Team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md)
- [Subfield equal-weight trend aggregation](../methods/subfield_equal_weight_trend_aggregation.md)
- [Citation distribution scaling](../measures/citation_distribution_scaling.md)
- [Attention inequality and impact skew](../mechanisms/attention_inequality.md)
- [First/last five-year team contrast](../methods/first_last_five_year_team_contrast.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `broad_domain_pooled_tail_denominator`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: pooled domain tail analysis; broad-area citation-tail denominator; pooled exceptional-research distribution
