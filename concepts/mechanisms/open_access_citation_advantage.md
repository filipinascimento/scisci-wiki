# Open access citation advantage

## Summary

Open access citation advantage is the observed association that freely accessible articles often receive more citations than comparable closed articles.

## Canonical Form

- Unit of analysis: article, OA route, field, publication year, journal, institution, funder, or portfolio.
- Typical representation: citation ratio, field-normalized citation rate, regression coefficient, or route-specific average relative citation.
- Mechanism: wider accessibility, repository discoverability, author selection into OA, funder mandates, journal effects, or field composition.
- Empirical signature: OA articles show higher citation impact after accounting for age, field, or discipline, with effects varying by route.

## Uses in Science of Science

- Links [open access status](../datasets/open_access_status.md) to [citation impact indicators](../measures/citation_impact_indicators.md).
- Provides a mechanism for evaluating publishing policy and public-access mandates.
- Adds a confounder and potential mediator to studies of [responsible metrics](../measures/responsible_metrics.md), [field normalized citation impact](../measures/field_normalized_citation_impact.md), and attention inequality.
- Requires [open access citation selection bias](../validations/open_access_citation_selection_bias.md) checks before making causal claims.

## Operationalization

- Classify articles by [open access route typology](../datasets/open_access_route_typology.md).
- Compare OA and Closed articles on raw or field-normalized citations with controls for article age, field, journal, funding, and publication year.
- Report route-specific effects for Gold, Green, Hybrid, Bronze, and Closed rather than only a binary OA coefficient.
- Treat citation advantage as an association unless the design addresses author selection, embargo timing, funder mandates, and route-specific selection bias.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) reports that, accounting for age and discipline, OA articles receive 18% more citations than average.
- The same analysis finds route heterogeneity: Green and Hybrid OA are cited more than 30% above expectation, Bronze also shows above-average citation impact, while Gold OA is below the world average in their route-specific comparison.
- Piwowar et al. argue that the overall OA citation advantage is strongly driven by Green, Hybrid, and Bronze content rather than by Gold OA.
- The paper explicitly warns that factors such as funder requirements, article quality, self-selection, and field context may contribute to the observed advantage.

## Caveats

- OA citation advantage is not automatically causal.
- Route-specific effects can mix access mechanisms with journal selection, funding, article quality, and field differences.
- Recent-year estimates can be affected by short citation windows.

## Links

- [open access status](../datasets/open_access_status.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [open access detection validation](../validations/open_access_detection_validation.md)
- [open access citation selection bias](../validations/open_access_citation_selection_bias.md)
- [bronze open access ambiguity](../validations/bronze_open_access_ambiguity.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [public and policy attention](public_policy_attention.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `open_access_citation_advantage`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Aliases: OACA; OA citation advantage; access citation effect; open access impact advantage
