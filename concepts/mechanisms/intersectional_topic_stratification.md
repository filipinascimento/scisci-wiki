# Intersectional topic stratification

## Summary

Intersectional topic stratification is the pattern that demographic groups are distributed unevenly across research topics, and that topic-level citation, prestige, and visibility differences can convert representation gaps into impact gaps.

## Canonical Form

- Unit of analysis: paper, first author, demographic group, topic, field, citation outcome, or topic-by-group cell.
- Typical representation: topic model, field classification, demographic topic distribution, overrepresentation score, or topic-adjusted citation decomposition.
- Mechanism: identity-linked opportunity structures, mentorship, institutional placement, problem choice, and community demand shape who works on which topics; topic-level attention then shapes measured impact.
- Empirical signature: minoritized groups are concentrated in some topics and underrepresented in others, with both between-topic and within-topic citation differences.

## Uses in Science of Science

- Refines [gender and race stratification](gender_race_stratification.md) by locating disparities inside the knowledge structure of fields rather than only in aggregate counts.
- Connects [attention inequality](attention_inequality.md) to [topic models](../methods/topic_models.md), because topic-level attention can differ before individual paper quality is considered.
- Splits into [topic-identity homophily](topic_identity_homophily.md), [demographic topic concentration CV](../measures/demographic_topic_concentration_cv.md), [topic-choice privilege](topic_choice_privilege.md), [between-topic citation disadvantage](between_topic_citation_disadvantage.md), and [within-topic citation disadvantage](within_topic_citation_disadvantage.md).
- Provides a decomposition target for [field-normalized citation impact](../measures/field_normalized_citation_impact.md) and [field classifications](../measures/field_classifications.md).
- Helps explain why citation gaps can persist after broad field normalization.
- Connects workforce composition to [demographic knowledge-gap accumulation](demographic_knowledge_gap_accumulation.md) and policy responses such as [topic-network equity intervention portfolio](../methods/topic_network_equity_intervention_portfolio.md).
- Recent residual split-outs add [topic overrepresentation ratio](../measures/topic_overrepresentation_ratio.md), [topic-sorted intersectional citation curves](../representations/topic_sorted_intersectional_citation_curves.md), [field-normalized topic residual audit](../validations/field_normalized_topic_residual_audit.md), and [country-specific race-category scope boundary](../validations/country_specific_race_category_scope_boundary.md).

## Operationalization

- Infer or observe demographic attributes for authors, with explicit uncertainty and privacy limits.
- Assign articles to topics through topic models, field taxonomies, keyword clusters, or embedding clusters.
- Compute group representation within each topic relative to the group share in the relevant article population.
- Decompose citation gaps into between-topic placement, within-topic citation differences, field/year effects, and authorship-role effects.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) studies U.S.-affiliated first authors in Web of Science articles from 2008 to 2019 and links inferred race, gender, topic distributions, and field-normalized citations.
- The paper uses probabilistic surname-based race or ethnicity distributions, binary gender inference, author disambiguation, and fractional counting across racial categories, gender, and topics.
- Kozlowski et al. report that White and Asian authors are overrepresented among U.S. authors while Black and Latinx authors are underrepresented, with representation varying strongly by field.
- Their topic analysis finds that Black and Latinx authors are more concentrated in specialized topics tied to racialized identity, discrimination, language, migration, and community-specific problems.
- The verified text reports that marginalized groups are overrepresented in lower-cited topics and underrepresented in higher-cited topics, and that citation gaps remain even after field normalization.
- Kozlowski et al. also supply a counterfactual knowledge-portfolio validation: if author demographics over the prior 40 years had matched the 2010 U.S. Census, topic output would have shifted toward public health, gender-based violence, gynecology, gerontology, immigrants and minorities, and mental health.
- A residual pass separates the cell-level overrepresentation ratio, topic-sorted citation-curve representation, post-field-normalization residual audit, and country-specific race-category scope rule from the broader inequality mechanism.

## Caveats

- Topic models and field taxonomies impose boundaries that can change measured stratification.
- Name-based demographic inference is incomplete, culturally uneven, and should not be interpreted as identifying individual self-reported identity.
- Topic concentration can reflect agency, community relevance, constraint, exclusion, or combinations of these mechanisms.
- Citation disadvantage is not the same as lower social value or lower intellectual contribution.

## Links

- [gender and race stratification](gender_race_stratification.md)
- [attention inequality](attention_inequality.md)
- [topic models](../methods/topic_models.md)
- [first-author publication frame](../methods/first_author_publication_frame.md)
- [WoS US first-author intersectional topic panel](../datasets/wos_us_first_author_intersectional_topic_panel.md)
- [probabilistic demographic fractional counting](../methods/probabilistic_demographic_fractional_counting.md)
- [demographic-proxy coverage imputation](../validations/demographic_proxy_coverage_imputation.md)
- [binary gender proxy boundary](../validations/binary_gender_proxy_boundary.md)
- [race-gender topic portfolio maps](../representations/race_gender_topic_portfolio_maps.md)
- [topic-identity homophily](topic_identity_homophily.md)
- [demographic topic concentration CV](../measures/demographic_topic_concentration_cv.md)
- [topic-choice privilege](topic_choice_privilege.md)
- [between-topic citation disadvantage](between_topic_citation_disadvantage.md)
- [within-topic citation disadvantage](within_topic_citation_disadvantage.md)
- [demographic parity topic-output counterfactual](../validations/demographic_parity_topic_output_counterfactual.md)
- [demographic knowledge-gap accumulation](demographic_knowledge_gap_accumulation.md)
- [topic-network equity intervention portfolio](../methods/topic_network_equity_intervention_portfolio.md)
- [topic overrepresentation ratio](../measures/topic_overrepresentation_ratio.md)
- [topic-sorted intersectional citation curves](../representations/topic_sorted_intersectional_citation_curves.md)
- [field-normalized topic residual audit](../validations/field_normalized_topic_residual_audit.md)
- [country-specific race-category scope boundary](../validations/country_specific_race_category_scope_boundary.md)
- [field classifications](../measures/field_classifications.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [gendered self-citation gap](gendered_self_citation_gap.md)
- [name-based demographic inference](../methods/name_based_demographic_inference.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]
- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]

## Metadata

- Concept ID: `intersectional_topic_stratification`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: topic segregation; race gender topic sorting; intersectional topic inequality; marginalized topic concentration
