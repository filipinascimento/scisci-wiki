# Career-age weighted knowledge-loss counterfactual

## Summary

Career-age weighted knowledge-loss counterfactual estimates lost topic output by weighting demographic parity gaps by career age and an assumed productivity horizon.

## Canonical Form

- Unit of analysis: author group, career age, topic, expected publication count, or counterfactual output.
- Typical representation: demographic parity counterfactual with career-age weighting.
- Method target: estimate knowledge production missing from underrepresentation over a career horizon.
- Empirical signature: topic-output gaps are translated into cumulative lost papers or topic contributions.

## Uses in Science of Science

- Extends [demographic parity topic-output counterfactual](../validations/demographic_parity_topic_output_counterfactual.md).
- Links to [demographic knowledge-gap accumulation](../mechanisms/demographic_knowledge_gap_accumulation.md).
- Uses logic similar to [matched career counterfactuals](matched_career_counterfactuals.md).
- Relies on assumptions such as [published-effort stationarity assumption](../validations/published_effort_stationarity_assumption.md).

## Operationalization

- Estimate demographic parity gaps by topic.
- Weight missing representation by career age or remaining career horizon.
- Assume or model productivity across a standard career length.
- Aggregate topic-level missing output into knowledge-loss estimates.
- Report sensitivity to productivity and career-length assumptions.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) estimates knowledge gaps under demographic parity while accounting for career age and an assumed career horizon.
- The method turns representation disparities into counterfactual missing topic output.
- It makes explicit that inequality changes what knowledge is produced, not only who receives credit.

## Caveats

- Career-length and productivity assumptions can dominate the estimate.
- Counterfactual parity does not specify the intervention needed to reach parity.
- Publication output is an incomplete proxy for knowledge.

## Links

- [demographic parity topic-output counterfactual](../validations/demographic_parity_topic_output_counterfactual.md)
- [demographic knowledge-gap accumulation](../mechanisms/demographic_knowledge_gap_accumulation.md)
- [matched career counterfactuals](matched_career_counterfactuals.md)
- [published-effort stationarity assumption](../validations/published_effort_stationarity_assumption.md)
- [m-quotient](../measures/m_quotient.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `career_age_weighted_knowledge_loss_counterfactual`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: career-age knowledge gap counterfactual; age-weighted parity counterfactual; lost topic-output estimator
