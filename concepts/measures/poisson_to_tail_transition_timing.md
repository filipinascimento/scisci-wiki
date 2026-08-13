# Poisson-to-tail transition timing

## Summary

Poisson-to-tail transition timing measures when a field's team-size distribution stops being adequately described by a small-team Poisson-like body and begins requiring a large-team tail component.

## Canonical Form

- Unit of analysis: field, publication period, team-size distribution, mixture component, or tail onset.
- Typical representation: first tail period, hook-plus-tail transition, periodized mixture fit, or large-team component emergence.
- Measure target: date or stage the shift from core-team dominance toward extended-team tail growth.
- Empirical signature: later periods show a statistically meaningful large-team tail that earlier periods lack or show weakly.

## Uses in Science of Science

- Adds a timing measure to [authorship mode parameter trajectories](authorship_mode_parameter_trajectories.md).
- Supports [cross-field team-size decomposition validation](../validations/cross_field_team_size_decomposition_validation.md).
- Uses [low-k hook diagnostic](../validations/low_k_hook_diagnostic.md) to avoid fitting the whole distribution with one law.

## Operationalization

- Fit periodized team-size decompositions within fields.
- Identify the first period where the tail component improves fit or exceeds a prespecified contribution threshold.
- Report uncertainty and sensitivity to binning, field boundaries, and source coverage.
- Compare transition timing across disciplines.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) shows that the emergence and timing of the large-team tail differ across fields.
- The paper's field-period comparisons motivate a transition-timing measure rather than a single static distribution summary.

## Caveats

- Sparse large-team tails can make transition dates unstable.
- Corpus expansion and journal coverage changes can mimic tail growth.
- Transition timing depends on the model used to separate body and tail.

## Links

- [authorship mode parameter trajectories](authorship_mode_parameter_trajectories.md)
- [cross-field team-size decomposition validation](../validations/cross_field_team_size_decomposition_validation.md)
- [low-k hook diagnostic](../validations/low_k_hook_diagnostic.md)
- [disciplinary collaboration norm shift](../mechanisms/disciplinary_collaboration_norm_shift.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown]

## Metadata

- Concept ID: `poisson_to_tail_transition_timing`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: team-size tail onset timing; core-to-extended team transition; hook-tail transition date
