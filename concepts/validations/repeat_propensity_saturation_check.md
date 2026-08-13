# Repeat-Propensity Saturation Check

## Summary

Repeat-propensity saturation check is a model-boundary validation that flags empirical repeat-collaboration fractions too high to be reproduced by a probability parameter bounded at one.

## Canonical Form

- Unit of analysis: journal, field, team-assembly simulation, or collaboration network.
- Typical representation: empirical repeat-link fraction compared with feasible `q` values.
- Validation target: boundary cases where a team-assembly model cannot directly match repeated incumbent collaboration.
- Empirical signature: fitted or implied `q` exceeds one, requiring capped simulations or a model extension.

## Uses in Science of Science

- Adds a feasibility check to [team self-assembly models](../methods/team_self_assembly_models.md).
- Audits [team assembly parameter space](../methods/team_assembly_parameter_space.md).
- Connects [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md) to model limits.
- Complements [team assembly degree-distribution validation](team_assembly_degree_distribution_validation.md).

## Operationalization

- Estimate the empirical fraction of repeat incumbent-incumbent links.
- Infer the repeat-collaboration parameter needed to reproduce the observed fraction.
- Flag cases where the implied probability is outside the feasible range.
- Run capped simulations separately from unrestricted model claims.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) defines `q` as the probability that an incumbent chooses a prior collaborator rather than a random incumbent.
- The paper notes that some low-impact journals have repeat-link fractions too high to reproduce, represented as `q > 1`.
- Guimera et al. report that simulations for those cases are capped at `q = 1`, making the saturation visible rather than hidden.

## Caveats

- Saturation can reflect model misspecification, field norms, data errors, or journal boundary problems.
- A capped simulation can still match other network summaries, so the diagnostic should be reported separately.
- The check is specific to parameterized probability models and may not apply to nonparametric team-formation descriptions.

## Links

- [team self-assembly models](../methods/team_self_assembly_models.md)
- [team assembly parameter space](../methods/team_assembly_parameter_space.md)
- [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md)
- [team assembly degree-distribution validation](team_assembly_degree_distribution_validation.md)
- [repeat collaboration lock-in](../mechanisms/repeat_collaboration_lock_in.md)
- [disciplinary team-assembly regimes](disciplinary_team_assembly_regimes.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; SciSciNet: W2150443611; WoS: unknown]

## Metadata

- Concept ID: `repeat_propensity_saturation_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Dimensions ID: `pub.1062451305`
- SciSciNet ID: `W2150443611`
- Aliases: q greater than one diagnostic; repeat-link saturation; repeat collaboration feasibility check; incumbent-repeat model boundary
