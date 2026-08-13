# Team assembly degree-distribution validation

## Summary

Team assembly degree-distribution validation tests whether a team-formation model reproduces the observed collaborator-degree distributions of empirical creative or scientific fields.

## Canonical Form

- Unit of analysis: field, journal, collaboration network, simulated network, author degree, or confidence interval.
- Typical representation: empirical degree distribution overlaid with simulation ensemble, largest-component comparison, or model-fit table.
- Validation target: determine whether local team-assembly rules can reproduce macro-level collaboration topology.
- Empirical signature: simulated degree distributions and largest-component sizes closely match empirical networks after fitting assembly parameters.

## Uses in Science of Science

- Provides a structural validation for [team self-assembly models](../methods/team_self_assembly_models.md) and [team assembly parameter space](../methods/team_assembly_parameter_space.md).
- Connects formation parameters to [coauthorship networks](../representations/coauthorship_networks.md), [collaborator-count distribution](../measures/collaborator_count_distribution.md), and [collaboration giant component](../measures/collaboration_giant_component.md).
- Complements [team assembly performance gradient](team_assembly_performance_gradient.md), which validates against output proxies.
- Helps distinguish plausible formation models from models that only match one aggregate statistic.

## Operationalization

- Estimate team-assembly parameters from empirical team sequences.
- Simulate networks using the same observed or sampled team-size sequence; use [observed team-size sequence control](../methods/observed_team_size_sequence_control.md) when team-size effects must be held fixed.
- Compare simulated and empirical collaborator-degree distributions, ideally with uncertainty intervals.
- Compare largest-component size and other global statistics to avoid fitting only local degree.
- Report mismatches by field or venue, because a model can fit some systems better than others.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) estimates `p` and `q` for each empirical field and simulates the model to predict degree distributions and largest-component sizes.
- The paper uses the empirical sequence of team-size values from the corresponding dataset when comparing model outputs to data.
- The paper reports that the model predicts empirical collaboration-network degree distributions remarkably well.
- Table evidence compares measured and model-predicted largest-component fractions `S` and finds close agreement across Broadway, social psychology, economics, ecology, and astronomy.
- The figure caption states that empirical degree distributions fall within the 95% confidence intervals of the model predictions for all cases considered.

## Caveats

- Matching degree distributions does not uniquely identify the true team-formation mechanism.
- Degree-fit validation can miss clustering, brokerage, topic structure, hierarchy, institutions, or temporal shocks.
- If author disambiguation or field boundaries are wrong, empirical degree distributions can make a model look better or worse than it is.

## Links

- [team self-assembly models](../methods/team_self_assembly_models.md)
- [team assembly parameter space](../methods/team_assembly_parameter_space.md)
- [observed team-size sequence control](../methods/observed_team_size_sequence_control.md)
- [creative team assembly panels](../datasets/creative_team_assembly_panels.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [collaborator-count distribution](../measures/collaborator_count_distribution.md)
- [collaboration giant component](../measures/collaboration_giant_component.md)
- [collaboration percolation transition](../mechanisms/collaboration_percolation_transition.md)
- [team assembly performance gradient](team_assembly_performance_gradient.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; WoS: unknown]

## Metadata

- Concept ID: `team_assembly_degree_distribution_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Dimensions ID: `pub.1062451305`
- SciSciNet ID: `W2150443611`
- Aliases: team model degree validation; collaboration degree reproduction; assembly-model topology validation; team-formation degree fit
