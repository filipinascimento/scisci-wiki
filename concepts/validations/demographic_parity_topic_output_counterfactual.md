# Demographic parity topic-output counterfactual

## Summary

Demographic parity topic-output counterfactuals estimate how the scientific topic portfolio would differ if author demographics matched a reference population rather than the observed scientific workforce.

## Canonical Form

- Unit of analysis: topic, demographic group, publication volume, counterfactual population, field, or time window.
- Typical representation: observed-versus-counterfactual article counts by topic, topic-output gap table, or portfolio-shift scenario.
- Validation target: whether demographic underrepresentation plausibly changes what science studies, not only who receives credit.
- Empirical signature: topic output changes substantially when author demographics are reweighted to a population benchmark.

## Uses in Science of Science

- Turns [topic-identity homophily](../mechanisms/topic_identity_homophily.md) into a knowledge-portfolio consequence.
- Validates that [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md) can affect the direction of knowledge production.
- Provides a policy-facing audit for [responsible metrics](../measures/responsible_metrics.md), funding portfolios, and [locally relevant research metrics](locally_relevant_research_metrics.md).
- Helps distinguish representation as a workforce-equity issue from representation as a knowledge-coverage issue.
- Provides empirical support for [demographic knowledge-gap accumulation](../mechanisms/demographic_knowledge_gap_accumulation.md).

## Operationalization

- Choose a benchmark population, such as national census demographics or a target workforce distribution.
- Estimate topic output by demographic group in the observed publication data.
- Reweight group-topic output to the benchmark distribution while holding productivity assumptions explicit.
- Report which topics would gain or lose output and state the assumptions behind the counterfactual.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) estimates a coarse counterfactual in which the author distribution over the previous 40 years matches the 2010 U.S. Census.
- The paper reports that under this scenario there would have been 29% more articles in public health, 26% more on gender-based violence, 25% more in gynecology and gerontology, 20% more on immigrants and minorities, and 18% more on mental health.
- Kozlowski et al. use the counterfactual to argue that a different body of knowledge would have been produced in the absence of inequalities.
- The validation supports the claim that diversity affects the robustness and social coverage of science, not just individual career outcomes.

## Caveats

- Counterfactual output estimates depend on productivity assumptions, career-age assumptions, topic models, and the choice of benchmark population.
- Demographic parity is not the only possible justice or policy benchmark.
- Topic-output gains should not be interpreted as exact causal estimates without stronger identification.
- The counterfactual is a signal for policy design, not proof of the exact number of missing studies.

## Links

- [topic-identity homophily](../mechanisms/topic_identity_homophily.md)
- [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md)
- [race-gender topic portfolio maps](../representations/race_gender_topic_portfolio_maps.md)
- [between-topic citation disadvantage](../mechanisms/between_topic_citation_disadvantage.md)
- [demographic knowledge-gap accumulation](../mechanisms/demographic_knowledge_gap_accumulation.md)
- [topic-network equity intervention portfolio](../methods/topic_network_equity_intervention_portfolio.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [locally relevant research metrics](locally_relevant_research_metrics.md)
- [indicator systemic effects](../mechanisms/indicator_systemic_effects.md)
- [science of science framework](../methods/science_of_science_framework.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `demographic_parity_topic_output_counterfactual`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: topic-output parity counterfactual; demographic parity knowledge portfolio; census-weighted topic output; representation-based topic counterfactual
