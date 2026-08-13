# Open access citation selection bias

## Summary

Open access citation selection bias is the validation concern that OA articles may be more cited because authors, funders, journals, or fields selectively make higher-impact work open.

## Canonical Form

- Unit of analysis: article, OA route, author, funder, journal, field, publication year, or citation window.
- Typical representation: selection-control design, route-specific citation coefficient, matched comparison, natural experiment, randomized test, or caveat flag.
- Validation target: distinguish access-caused citation gains from preexisting differences in article quality, author behavior, funder mandates, field composition, or venue prestige.
- Empirical signature: OA citation advantages shrink, disappear, or vary by route when selection and confounding are controlled.

## Uses in Science of Science

- Qualifies [open access citation advantage](../mechanisms/open_access_citation_advantage.md) by separating observed association from causal access effects.
- Connects OA studies to [field normalized citation impact](../measures/field_normalized_citation_impact.md), [citation window selection](../methods/citation_window_selection.md), and [responsible metrics](../measures/responsible_metrics.md).
- Uses [open access route typology](../datasets/open_access_route_typology.md) to avoid collapsing mechanisms that have different selection pressures.
- Helps interpret policy claims based on [open access prevalence measurement](../measures/open_access_prevalence_measurement.md) and citation outcomes.

## Operationalization

- Start from an audited [open access status](../datasets/open_access_status.md) or route label.
- Normalize citations by field and article age before comparing OA and Closed groups.
- Add controls or designs for author selection, journal effects, funder mandates, field composition, publication year, and route-specific access timing.
- Report route-specific results for Green, Hybrid, Bronze, Gold, and Closed rather than only a binary OA comparison.
- Treat citation advantage as associative unless the design can identify timing, mandate, or randomization effects.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) reviews the open-access citation advantage literature and notes critiques based on author selection.
- Their own Web of Science DOI sample uses average relative citations normalized by article age and NSF specialty to compare citation impact across access categories.
- The paper reports an overall OA citation advantage, but also emphasizes route heterogeneity: Green, Hybrid, and Bronze are above expectation while Gold is below the world average in their comparison.
- Piwowar et al. explicitly state that their study does not determine the cause or direction of the correlation and that selection bias, funder requirements, article quality, and field context may contribute.
- The paper identifies short citation windows for recent articles as another interpretation risk.

## Caveats

- Route-specific citation effects can combine access, author choice, journal prestige, mandate compliance, and disciplinary culture.
- Funder requirements can create both access changes and independent citation advantages.
- Bronze OA is especially hard to interpret because publisher-hosted free access may reflect delayed, promotional, or hidden-gold dynamics.
- Normalized citation comparisons reduce field and age confounding but do not by themselves establish causality.

## Links

- [open access citation advantage](../mechanisms/open_access_citation_advantage.md)
- [open access status](../datasets/open_access_status.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [bronze open access ambiguity](bronze_open_access_ambiguity.md)
- [open access detection validation](open_access_detection_validation.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation window selection](../methods/citation_window_selection.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `open_access_citation_selection_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Aliases: OA selection bias; open access citation confounding; access advantage selection; route-specific citation bias
