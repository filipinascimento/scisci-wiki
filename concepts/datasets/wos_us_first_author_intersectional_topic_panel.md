# WoS US first-author intersectional topic panel

## Summary

WoS US first-author intersectional topic panel is a Web of Science article panel linking US-affiliated first authors, inferred race and gender probabilities, topic mixtures, fields, and normalized citation outcomes.

## Canonical Form

- Unit of analysis: article, first author, inferred demographic vector, topic mixture, field, year, or citation outcome.
- Typical representation: paper-level table with first-author metadata, inferred race probabilities, inferred binary gender, topic probabilities, field labels, and field-year normalized citations.
- Measurement target: intersectional topic participation and citation outcomes for US first-author publication records.
- Empirical signature: each article contributes weighted mass across race, gender, and topic cells while retaining a first-author-centered scope.

## Uses in Science of Science

- Provides the dataset layer for [first-author publication frame](../methods/first_author_publication_frame.md), [probabilistic demographic fractional counting](../methods/probabilistic_demographic_fractional_counting.md), and [race-gender topic portfolio maps](../representations/race_gender_topic_portfolio_maps.md).
- Supplies empirical input for [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md), [topic-identity homophily](../mechanisms/topic_identity_homophily.md), and [demographic topic concentration CV](../measures/demographic_topic_concentration_cv.md).
- Connects [Web of Science](web_of_science.md) article metadata with inferred-demographic and topic-model layers.
- Supports topic-level citation audits such as [between-topic citation disadvantage](../mechanisms/between_topic_citation_disadvantage.md) and [within-topic citation disadvantage](../mechanisms/within_topic_citation_disadvantage.md).

## Operationalization

- Start from US-affiliated Web of Science articles over a defined publication window.
- Disambiguate first authors and retain ordered authorship metadata.
- Infer gender and surname-based race or ethnicity probability vectors for first authors, preserving uncertainty.
- Train or attach topic models from title, abstract, and keyword text.
- Join field and year normalized citation outcomes and compute fractional group-topic aggregates.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) analyzes 5,431,451 Web of Science articles published from 2008 to 2019.
- The panel contains 1,609,107 distinct US-affiliated first authors.
- The study links first-author name metadata, Caron-van Eck author disambiguation, gender inference, US Census surname race probabilities, NSF journal fields and subfields, LDA topic mixtures, and field-year normalized citations.
- Kozlowski et al. make detailed methods, result tables, code, and materials available while noting that restrictions apply to the proprietary Web of Science bibliometric data.

## Caveats

- The panel represents US-affiliated first authors, not all authors or all countries.
- Web of Science coverage, document-type scope, author-order conventions, and proprietary access affect reuse.
- Race and gender are inferred aggregate proxies, not self-identified demographic variables.
- Topic mixtures and citation outcomes depend on text availability, field definitions, and citation-window choices.

## Links

- [Web of Science](web_of_science.md)
- [first-author publication frame](../methods/first_author_publication_frame.md)
- [probabilistic demographic fractional counting](../methods/probabilistic_demographic_fractional_counting.md)
- [race-gender topic portfolio maps](../representations/race_gender_topic_portfolio_maps.md)
- [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md)
- [topic-identity homophily](../mechanisms/topic_identity_homophily.md)
- [demographic topic concentration CV](../measures/demographic_topic_concentration_cv.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [binary gender proxy boundary](../validations/binary_gender_proxy_boundary.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `wos_us_first_author_intersectional_topic_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: US first-author intersectional topic panel; WoS intersectional inequality panel; race-gender topic citation panel; US first-author topic-citation corpus
