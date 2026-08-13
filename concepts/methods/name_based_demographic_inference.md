# Name-based demographic inference

## Summary

Name-based demographic inference uses given names, family names, and external name-frequency data to estimate aggregate gender, race, or ethnicity distributions in scholarly records when self-reported demographics are unavailable.

## Canonical Form

- Unit of analysis: author mention, disambiguated author, paper, name string, demographic category, or aggregate group estimate.
- Typical representation: probability distribution over demographic categories, coverage rate, threshold assignment, or fractional-counted group outcome.
- Mechanism or measurement target: demographic proxy construction for bibliometric disparity analysis.
- Empirical signature: names are mapped to probabilistic demographic attributes and uncertainty is propagated into aggregate counts, citation estimates, or outcome gaps.

## Uses in Science of Science

- Enables large-scale studies of [gender and race stratification](../mechanisms/gender_race_stratification.md) when administrative or self-reported demographic data are not available.
- Includes concrete workflows such as [given-name gender assignment](given_name_gender_assignment.md), which maps author first names to inferred gender categories for aggregate bibliometric analysis.
- Provides the measurement layer for [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md) and [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md).
- Provides the input labels for [gendered fractional authorship ratio](../measures/gendered_fractional_authorship_ratio.md), [gendered collaboration rate](../measures/gendered_collaboration_rate.md), and [lead-author gender citation gap](../mechanisms/lead_author_gender_citation_gap.md).
- Feeds [probabilistic demographic fractional counting](probabilistic_demographic_fractional_counting.md) when downstream estimates should preserve category uncertainty.
- In the [JSTOR network dataset](../datasets/jstor_network_dataset.md), pairs with [full-name self-citation matching](full_name_self_citation_matching.md) to estimate gender-stratified self-citation behavior.
- Depends on [author name disambiguation](author_name_disambiguation.md), because demographic inference over unresolved author mentions can mix people through [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md).
- Supplies uncertainty and bias checks for [responsible metrics](../measures/responsible_metrics.md).

## Operationalization

- Normalize author names and separate given names from family names when possible.
- Match given names to gender-name databases or census-derived lists, while reporting unmatched names and non-binary limitations.
- Match surnames to census or country-specific distributions over race or ethnicity when the categories are relevant to the study context.
- Prefer probabilistic fractional counting for aggregate analyses, especially when one-name-one-category assignment would overstate certainty.
- Report coverage, missingness, culturally specific error modes, category definitions, and whether inference is used only for aggregate statistics.

## Evidence and Validations

- Verified full-text evidence from Lariviere et al. (2013) assigns gender to Web of Science author mentions by matching given names to US Census, WikiName, Wikipedia, French/Quebec, and country-specific lists.
- Lariviere et al. preprocess initials, nicknames, hyphens, spaces, and punctuation, then classify records as female, male, unisex, unknown, or initials before aggregate analysis.
- The paper uses the method on authorships rather than disambiguated individuals, making unit-of-analysis reporting part of the inference workflow.
- The supplement reports coverage and validation results, split out as [gender-name assignment validation](../validations/gender_name_assignment_validation.md).
- Verified full-text evidence from King et al. (2017) assigns gender to 2.8 million JSTOR authors using first names, then estimates self-citation rates by inferred gender within fields and years.
- King et al. use the method to show a large gendered self-citation gap, while also discussing that productivity histories, field composition, and citation incentives complicate interpretation.
- Verified full-text evidence from Kozlowski et al. (2022) uses a gender inference procedure based on prior bibliometric work and U.S. Census surname distributions to infer race or ethnicity probabilities for first authors.
- Kozlowski et al. explicitly avoid assigning each author a single racial category; they use weighted aggregates in which an author's paper contributes fractionally across racial groups according to surname probabilities.
- The verified text warns that threshold-based assignment can underestimate Black authors because of surname overlap, making uncertainty propagation part of the method rather than an optional detail.
- Kozlowski et al. further multiply demographic and topic probabilities to compute race-gender-topic aggregates and normalized citation averages.

## Caveats

- Name-based inference is a proxy for aggregate analysis, not a substitute for self-reported identity.
- Binary gender inference excludes non-binary identities unless self-identification data are available.
- Race and ethnicity categories are context-specific social constructs; surname methods developed for one country should not be applied elsewhere without redesign.
- Errors can be uneven by country, language, migration history, name change, transliteration, and group size.
- Sensitive attributes should be handled with privacy-preserving governance and clear limits on downstream use.

## Links

- [author name disambiguation](author_name_disambiguation.md)
- [author-name blocking](author_name_blocking.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)
- [given-name gender assignment](given_name_gender_assignment.md)
- [gender-name assignment validation](../validations/gender_name_assignment_validation.md)
- [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md)
- [gendered fractional authorship ratio](../measures/gendered_fractional_authorship_ratio.md)
- [gendered collaboration rate](../measures/gendered_collaboration_rate.md)
- [lead-author gender citation gap](../mechanisms/lead_author_gender_citation_gap.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)
- [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md)
- [probabilistic demographic fractional counting](probabilistic_demographic_fractional_counting.md)
- [demographic-proxy coverage imputation](../validations/demographic_proxy_coverage_imputation.md)
- [JSTOR network dataset](../datasets/jstor_network_dataset.md)
- [full-name self-citation matching](full_name_self_citation_matching.md)
- [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md)
- [NIH R01 award disparities](../validations/nih_r01_award_disparities.md)
- [self-citation rates](../measures/self_citation_rates.md)
- [field classifications](../measures/field_classifications.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Lariviere, V., Ni, C., Gingras, Y., Cronin, B., & Sugimoto, C. R. (2013). Bibliometrics: Global gender disparities in science. *Nature*, 504, 211-213. https://doi.org/10.1038/504211a [OpenAlex: W2050990045; Dimensions: pub.1050929337; WoS: unknown]
- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]
- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `name_based_demographic_inference`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lariviere et al. (2013) (2013)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1038/504211a`
- OpenAlex ID: `W2050990045`
- Dimensions ID: `pub.1050929337`
- SciSciNet ID: `W2050990045`
- Aliases: gender inference; surname race inference; probabilistic demographic inference; aggregate demographic assignment; first-name gender inference
