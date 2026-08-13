# Gender parity pocket maps

## Summary

Gender parity pocket maps represent countries, regions, or disciplines where gendered authorship ratios approach or exceed parity, making local exceptions visible within global gender imbalance.

## Canonical Form

- Unit of analysis: country, region, state, province, discipline, specialty, or gendered authorship ratio.
- Typical representation: choropleth map, discipline heat map, parity threshold table, or female-to-male authorship ratio map.
- Representation target: locating contexts where women are relatively more or less represented in scholarly output.
- Empirical signature: a global male-dominated pattern contains pockets of near parity or female-dominated authorship, often in lower-output countries or care-associated fields.

## Uses in Science of Science

- Turns [gendered fractional authorship ratio](../measures/gendered_fractional_authorship_ratio.md) into a spatial and disciplinary representation.
- Provides exploratory targets for [gender and race stratification](../mechanisms/gender_race_stratification.md) and policy follow-up.
- Uses [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md) country and discipline layers to avoid treating gender disparity as spatially uniform.
- Connects disparity mapping to [field classifications](../measures/field_classifications.md) and country-level science-policy contexts.
- Requires [low-output parity-pocket caveat](../validations/low_output_parity_pocket_caveat.md) and can generate hypotheses about [local gender-disparity micro-mechanisms](../mechanisms/local_gender_disparity_micro_mechanisms.md).

## Operationalization

- Aggregate female and male fractional authorships by country, region, state/province, or discipline.
- Apply minimum-publication thresholds so extreme ratios from tiny cells are not overinterpreted.
- Map female-to-male ratios with a visible parity point and a missing-data category.
- Separate high-output and low-output contexts before interpreting apparent female dominance.
- Use parity pockets as hypotheses for qualitative or policy follow-up, not as proof of causal local mechanisms.

## Evidence and Validations

- Verified full-text evidence from Lariviere et al. (2013) maps gender and research output across countries and notes that men dominate scientific production in nearly every country.
- The paper reports that South American and Eastern European countries show greater gender parity, and that several female-dominant countries in the analysis have relatively low scientific output.
- Lariviere et al. identify care-associated specialties, including nursing, midwifery, education, social work, and librarianship, as fields with higher female representation.
- The paper also lists male-dominated fields such as engineering, robotics, aeronautics, high-energy physics, mathematics, computer science, philosophy, and economics.
- The authors explicitly propose future research on what distinguishes pockets of anomalously high parity.
- The field layer is split out as [gendered discipline output sorting](../measures/gendered_discipline_output_sorting.md), while small-denominator map cells are handled by [low-output parity-pocket caveat](../validations/low_output_parity_pocket_caveat.md).

## Caveats

- Near parity in authorships does not imply equal seniority, funding, citation impact, or career security.
- Low-output cells can appear female-dominant with small absolute counts.
- Country and discipline patterns can reflect source coverage, language coverage, field composition, and gender-name assignment coverage.
- A parity pocket is a descriptive signal, not a causal explanation.

## Links

- [gendered fractional authorship ratio](../measures/gendered_fractional_authorship_ratio.md)
- [gendered discipline output sorting](../measures/gendered_discipline_output_sorting.md)
- [low-output parity-pocket caveat](../validations/low_output_parity_pocket_caveat.md)
- [local gender-disparity micro-mechanisms](../mechanisms/local_gender_disparity_micro_mechanisms.md)
- [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md)
- [gendered author-position gap](../measures/gendered_author_position_gap.md)
- [gendered collaboration rate](../measures/gendered_collaboration_rate.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)
- [field classifications](../measures/field_classifications.md)
- [Web of Science](../datasets/web_of_science.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Lariviere, V., Ni, C., Gingras, Y., Cronin, B., & Sugimoto, C. R. (2013). Bibliometrics: Global gender disparities in science. *Nature*, 504, 211-213. https://doi.org/10.1038/504211a [OpenAlex: W2050990045; Dimensions: pub.1050929337; WoS: unknown]

## Metadata

- Concept ID: `gender_parity_pocket_maps`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Lariviere et al. (2013) (2013)
- Latest seen paper: Lariviere et al. (2013) (2013)
- Primary reference DOI: `10.1038/504211a`
- OpenAlex ID: `W2050990045`
- Dimensions ID: `pub.1050929337`
- SciSciNet ID: `W2050990045`
- Aliases: gender parity maps; parity pocket mapping; country gender parity map; discipline gender parity map
