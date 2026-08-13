# Gendered fractional authorship ratio

## Summary

Gendered fractional authorship ratio measures female-to-male publication output by assigning each gendered authorship a fractional share of a paper.

## Canonical Form

- Unit of analysis: paper, authorship, country, discipline, author position, or publication portfolio.
- Typical representation: female-to-male authorship ratio, gendered authorship share, or first-author gender ratio.
- Mechanism or measurement target: gendered representation in publication output.
- Empirical signature: papers are split among gender-assigned authorships and then aggregated by country, discipline, or author position.

## Uses in Science of Science

- Operationalizes output representation for [gender and race stratification](../mechanisms/gender_race_stratification.md).
- Converts [given-name gender assignment](../methods/given_name_gender_assignment.md) into country and discipline level publication measures.
- Can be mapped against [Web of Science](../datasets/web_of_science.md) fields, countries, and [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md) records.
- Provides the output layer needed to compare collaboration and impact gaps without treating raw paper counts as person-level productivity.
- Splits into [gendered author-position gap](gendered_author_position_gap.md) when first, last, or sole authorship is the target and [gender parity pocket maps](../representations/gender_parity_pocket_maps.md) when the output ratio is represented geographically or disciplinarily.
- Splits further into [gendered discipline output sorting](gendered_discipline_output_sorting.md) when field composition is the target.
- Should be bounded by [authorship-output indicator boundary](../validations/authorship_output_indicator_boundary.md) before being interpreted as total research activity.
- Should also be checked against [workforce-output parity divergence](../validations/workforce_output_parity_divergence.md) before publication-output parity is treated as workforce parity.

## Operationalization

- For each paper, identify authorships with assignable gender labels.
- Give each gender-assigned authorship a weight of 1/x, where x is the number of authors on the paper whose gender could be assigned.
- Sum female and male fractional authorships at the country, discipline, author-position, or portfolio level.
- Compute female-to-male ratios or shares, and report the missing, unisex, and initial-only denominator handling.
- For first authorship analyses, compare the count or share of papers with female first authors to those with male first authors.

## Evidence and Validations

- Verified full-text evidence from Lariviere et al. (2013) defines gendered fractional authorships by assigning each gendered author on a paper 1/x of the paper, where x is the count of authorships with assigned gender.
- They aggregate these gendered fractions at country and discipline levels and use them to create female-to-male output ratios.
- In their global Web of Science 2008-2012 corpus, women account for fewer than 30% of fractionalized authorships and men for slightly more than 70%.
- They report that for every article with a female first author, there are nearly two articles with male first authors.
- The same measure reveals strong country and discipline variation, with higher female shares in some Eastern European and South American contexts and in care-associated fields.
- That country and discipline variation is represented separately as [gender parity pocket maps](../representations/gender_parity_pocket_maps.md).
- The disciplinary layer is split out as [gendered discipline output sorting](gendered_discipline_output_sorting.md), and small-denominator geographic signals are guarded by [low-output parity-pocket caveat](../validations/low_output_parity_pocket_caveat.md).

## Caveats

- Fractional authorship is an authorship-output measure, not a measure of distinct people or individual productivity.
- The denominator excludes unassigned authorships, so coverage differences by country or field can affect ratios.
- Author order norms vary by field, and alphabetical ordering can weaken first-author interpretation.
- Publication output does not capture all research activity, including books, software, data, mentoring, or invisible labor.

## Links

- [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md)
- [given-name gender assignment](../methods/given_name_gender_assignment.md)
- [gender-name assignment validation](../validations/gender_name_assignment_validation.md)
- [gendered author-position gap](gendered_author_position_gap.md)
- [gender parity pocket maps](../representations/gender_parity_pocket_maps.md)
- [gendered discipline output sorting](gendered_discipline_output_sorting.md)
- [low-output parity-pocket caveat](../validations/low_output_parity_pocket_caveat.md)
- [workforce-output parity divergence](../validations/workforce_output_parity_divergence.md)
- [authorship-output indicator boundary](../validations/authorship_output_indicator_boundary.md)
- [gendered collaboration rate](gendered_collaboration_rate.md)
- [lead-author gender citation gap](../mechanisms/lead_author_gender_citation_gap.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)
- [probabilistic demographic fractional counting](../methods/probabilistic_demographic_fractional_counting.md)
- [team authorship share](team_authorship_share.md)

## References

- Lariviere, V., Ni, C., Gingras, Y., Cronin, B., & Sugimoto, C. R. (2013). Bibliometrics: Global gender disparities in science. *Nature*, 504, 211-213. https://doi.org/10.1038/504211a [OpenAlex: W2050990045; Dimensions: pub.1050929337; WoS: unknown]

## Metadata

- Concept ID: `gendered_fractional_authorship_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Lariviere et al. (2013) (2013)
- Latest seen paper: Lariviere et al. (2013) (2013)
- Primary reference DOI: `10.1038/504211a`
- OpenAlex ID: `W2050990045`
- Dimensions ID: `pub.1050929337`
- SciSciNet ID: `W2050990045`
- Aliases: female-to-male authorship ratio; gendered authorship share; fractional gender output; first-author gender ratio
