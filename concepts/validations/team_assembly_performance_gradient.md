# Team assembly performance gradient

## Summary

Team assembly performance gradient validates whether team-formation parameters vary systematically with output-performance proxies such as journal impact factor.

## Canonical Form

- Unit of analysis: journal, field, team sequence, collaboration network, performance stratum, or assembly parameter.
- Typical representation: rank correlation between impact factor and `p`, `q`, or largest-component size `S`; journal-level assembly profile; performance-gradient plot.
- Validation target: test whether the team-assembly mechanism is associated with output quality or impact rather than only network topology.
- Empirical signature: higher-performing venues show different incumbent shares, repeat-collaboration propensities, or giant-component sizes than lower-performing venues.

## Uses in Science of Science

- Extends [team self-assembly models](../methods/team_self_assembly_models.md) from structural validation to outcome validation.
- Links [team assembly parameter space](../methods/team_assembly_parameter_space.md), [repeat collaboration lock-in](../mechanisms/repeat_collaboration_lock_in.md), and [collaboration giant component](../measures/collaboration_giant_component.md) to performance proxies.
- Provides a cautionary empirical layer for interpreting [journal impact factor](../measures/journal_impact_factor.md) as a team-output proxy.
- Connects team formation to [team impact advantage](../mechanisms/team_impact_advantage.md), [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md), and [responsible metrics](../measures/responsible_metrics.md).

## Operationalization

- Estimate team-assembly parameters separately for journals, venues, departments, or performance strata.
- Document the corpus inclusion rule with [journal-set field-boundary filter](journal_set_field_boundary_filter.md) when journals define the field panel.
- Rank or group units by a performance proxy such as impact factor, citations, awards, or expert ratings.
- Test monotonic or model-based relationships between performance proxy and `p`, `q`, `S`, or `fR`.
- Check robustness with alternative performance measures and field-specific baselines.
- Treat performance associations as validation evidence for the mechanism, not as causal proof.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) estimates `p`, `q`, and largest-component size `S` for journals in social psychology, economics, ecology, and astronomy.
- The paper uses each journal's impact factor as a proxy for the typical quality of teams' output.
- The journal-level analysis depends on recognized-journal field filters and minimum paper-count requirements, now split out as [journal-set field-boundary filter](journal_set_field_boundary_filter.md).
- Guimera et al. find that `p` is positively correlated with impact factor for economics, ecology, and social psychology, implying higher-impact journals have more incumbent expertise.
- The paper also finds that `q` is negatively correlated with impact factor for the same fields, implying less repeat incumbent collaboration in higher-impact journals.
- The largest-component fraction `S` is associated with impact factor in ecology and social psychology, while astronomy is reported as an exception with no significant correlations among `p`, `q`, `S`, and impact factor.

## Caveats

- Journal impact factor is a journal-level proxy and should not be interpreted as team quality without caution.
- Correlation between assembly parameters and impact factor does not identify causal effects of team formation.
- Field-specific publication norms can change the meaning of incumbency, repeat collaboration, and journal impact.
- Astronomy's exception shows that the gradient is not universal.

## Links

- [team assembly parameter space](../methods/team_assembly_parameter_space.md)
- [team self-assembly models](../methods/team_self_assembly_models.md)
- [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md)
- [newcomer-incumbent team mix](../measures/newcomer_incumbent_team_mix.md)
- [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md)
- [repeat collaboration lock-in](../mechanisms/repeat_collaboration_lock_in.md)
- [collaboration giant component](../measures/collaboration_giant_component.md)
- [journal-set field-boundary filter](journal_set_field_boundary_filter.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; WoS: unknown]

## Metadata

- Concept ID: `team_assembly_performance_gradient`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Aliases: assembly-performance gradient; p-q performance correlation; team formation impact-factor gradient; journal-level assembly validation
