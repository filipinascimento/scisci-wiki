# Topic overrepresentation ratio

## Summary

Topic overrepresentation ratio measures whether an intersectional demographic group appears in a research topic more or less often than expected from that group's overall article share.

## Canonical Form

- Unit of analysis: topic, demographic group, paper, first author, or group-topic cell.
- Typical representation: observed group share in topic divided by the group's overall share in the relevant article population.
- Measurement target: localized topic enrichment or depletion for race, ethnicity, gender, or intersectional groups.
- Empirical signature: a ratio above one indicates overrepresentation in a topic, while a ratio below one indicates underrepresentation.

## Uses in Science of Science

- Supplies the cell-level measure for [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md).
- Complements [demographic topic concentration CV](demographic_topic_concentration_cv.md), which summarizes dispersion across topics rather than topic-by-topic enrichment.
- Feeds [race-gender topic portfolio maps](../representations/race_gender_topic_portfolio_maps.md) and [topic-sorted intersectional citation curves](../representations/topic_sorted_intersectional_citation_curves.md).
- Helps separate [topic-identity homophily](../mechanisms/topic_identity_homophily.md) from between-topic citation disadvantage.

## Operationalization

- Define the article population, author role, field, and demographic probability model.
- Compute each group's overall weighted article share.
- Compute each group's weighted share within every topic.
- Divide the topic share by the overall share and report uncertainty from demographic probabilities and topic assignment.
- Inspect ratios with [country-specific race-category scope boundary](../validations/country_specific_race_category_scope_boundary.md) and demographic-proxy coverage checks.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) defines topic over- and underrepresentation relative to each race/gender group's overall article share.
- The paper uses probabilistic demographic fractional counting so a first-authored article can contribute fractional mass across race, gender, and topic cells.
- Their topic analysis shows that Black and Latinx authors are overrepresented in some specialized topics tied to racialized identity, discrimination, language, migration, and community-specific problems.

## Caveats

- Overrepresentation does not by itself distinguish agency, exclusion, mission-driven work, field placement, or institutional constraint.
- Ratios are sensitive to topic granularity, field partitioning, and the demographic denominator.
- A high ratio in a small topic can be unstable unless uncertainty is reported.

## Links

- [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md)
- [topic-identity homophily](../mechanisms/topic_identity_homophily.md)
- [topic-choice privilege](../mechanisms/topic_choice_privilege.md)
- [race-gender topic portfolio maps](../representations/race_gender_topic_portfolio_maps.md)
- [topic-sorted intersectional citation curves](../representations/topic_sorted_intersectional_citation_curves.md)
- [probabilistic demographic fractional counting](../methods/probabilistic_demographic_fractional_counting.md)
- [demographic topic concentration CV](demographic_topic_concentration_cv.md)
- [country-specific race-category scope boundary](../validations/country_specific_race_category_scope_boundary.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `topic_overrepresentation_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: topic enrichment ratio; demographic topic overrepresentation; group-topic representation ratio; topic underrepresentation ratio
