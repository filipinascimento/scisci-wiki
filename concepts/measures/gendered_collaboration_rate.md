# Gendered collaboration rate

## Summary

Gendered collaboration rate measures the share of papers involving female or male authors that are produced through national or international collaboration.

## Canonical Form

- Unit of analysis: paper, country, gender-assigned author group, collaboration type, or publication portfolio.
- Typical representation: national collaboration rate and international collaboration rate by inferred author gender.
- Mechanism or measurement target: gender differences in access to collaboration structures that can affect output and citation impact.
- Empirical signature: female and male author-associated paper sets have different domestic and international collaboration profiles.

## Uses in Science of Science

- Extends [international coauthorship share](international_coauthorship_share.md) by stratifying collaboration exposure by inferred author gender.
- Connects [gender and race stratification](../mechanisms/gender_race_stratification.md) to [international collaboration networks](../representations/international_collaboration_networks.md).
- Helps interpret [lead-author gender citation gap](../mechanisms/lead_author_gender_citation_gap.md), because international collaboration often carries a citation premium.
- Provides a policy target for interventions that aim to broaden cross-border collaboration opportunities.
- Motivates [gender-targeted international collaboration support](../methods/gender_targeted_international_collaboration_support.md) as an intervention hypothesis, not a proven fix.
- Feeds [citation-evaluation disparity feedback](../mechanisms/citation_evaluation_disparity_feedback.md) when citation advantages from international collaboration enter evaluation systems.

## Operationalization

- For each country, identify papers with at least one female author and papers with at least one male author.
- Count the papers in each group that include coauthors from another country to compute international collaboration rates.
- Count papers in each group with coauthors from the same country to compute national collaboration rates.
- Compare female and male rates within country and document how multi-country and multi-gender bylines are counted.
- Report source coverage, author-address parsing, and gender-assignment coverage.

## Evidence and Validations

- Verified full-text evidence from Lariviere et al. (2013) calculates international and national collaboration rates separately for female and male authors in each country.
- Their denominator for the international rate is the number of papers in a country with at least one female or male author on the byline; the numerator is papers by that gender group involving collaborators from another country.
- For the 50 most productive countries, accounting for 97% of publications in the analysis, female collaborations are more domestically oriented than male collaborations from the same country.
- Lariviere et al. argue that this matters for impact because international collaborations accrue extra citations, so lower international exposure can compound gendered citation disadvantages.
- The paper's policy implication is split out as [gender-targeted international collaboration support](../methods/gender_targeted_international_collaboration_support.md).

## Caveats

- Coauthorship is an incomplete proxy for collaboration and misses informal mentoring, data sharing, facilities, and acknowledgments.
- Multi-gender bylines mean a single paper can contribute to both female and male author-associated denominators.
- Country-address and name-gender coverage can vary systematically across regions.
- Domestic orientation is an observed collaboration pattern, not proof that individual women have lower preference for international collaboration.

## Links

- [international coauthorship share](international_coauthorship_share.md)
- [international collaboration networks](../representations/international_collaboration_networks.md)
- [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md)
- [given-name gender assignment](../methods/given_name_gender_assignment.md)
- [gendered fractional authorship ratio](gendered_fractional_authorship_ratio.md)
- [lead-author gender citation gap](../mechanisms/lead_author_gender_citation_gap.md)
- [citation-evaluation disparity feedback](../mechanisms/citation_evaluation_disparity_feedback.md)
- [gender-targeted international collaboration support](../methods/gender_targeted_international_collaboration_support.md)
- [gendered seniority-pipeline confound](../validations/gendered_seniority_pipeline_confound.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)
- [collaboration source coverage bias](../validations/collaboration_source_coverage_bias.md)

## References

- Lariviere, V., Ni, C., Gingras, Y., Cronin, B., & Sugimoto, C. R. (2013). Bibliometrics: Global gender disparities in science. *Nature*, 504, 211-213. https://doi.org/10.1038/504211a [OpenAlex: W2050990045; Dimensions: pub.1050929337; WoS: unknown]

## Metadata

- Concept ID: `gendered_collaboration_rate`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Lariviere et al. (2013) (2013)
- Latest seen paper: Lariviere et al. (2013) (2013)
- Primary reference DOI: `10.1038/504211a`
- OpenAlex ID: `W2050990045`
- Dimensions ID: `pub.1050929337`
- SciSciNet ID: `W2050990045`
- Aliases: female international collaboration rate; gender-stratified coauthorship rate; domestic collaboration by gender; collaboration gender gap
