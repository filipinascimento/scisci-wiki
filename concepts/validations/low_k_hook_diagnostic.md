# Low-k hook diagnostic

## Summary

Low-k hook diagnostic checks whether a large-team tail model incorrectly extrapolates through the small-team region where most papers sit.

## Canonical Form

- Unit of analysis: team-size distribution, low-author-count region, power-law fit, or mixture component.
- Typical representation: small-`k` residual plot, hook shape, component overlay, and fit-comparison table.
- Validation target: avoid treating a large-team power law as the whole team-size distribution.
- Empirical signature: the low-team-size region deviates from the tail model and requires small-team components.

## Uses in Science of Science

- Validates the small-team side of [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md).
- Explains why [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md) uses Poisson components plus a tail component.
- Links the excess of two-author teams to [core+1 mentor component](../mechanisms/core_plus_one_mentor_component.md).
- Provides a specific diagnostic for [team-size distribution reproduction](team_size_distribution_reproduction.md).

## Operationalization

- Fit or visualize the large-team tail separately from the small-team body.
- Inspect whether the power-law tail breaks down at low `k`.
- Test whether a single Poisson component can explain the low-`k` pattern.
- Add small-team components only when the residual pattern and domain interpretation justify them.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) states that the power law breaks down for smaller team sizes, forming a hook.
- The paper emphasizes that the hook should not be neglected because most astronomy articles are still published by teams with fewer than 10 authors.
- Milojevic shows that the model must reproduce both the low-`k` hook and the emerging power-law tail.

## Caveats

- The threshold defining low `k` can vary by field and period.
- A hook can reflect several mechanisms, including dyadic mentoring, authorship norms, or field-specific research organization.
- The diagnostic is sensitive to author-count cleaning and group-author treatment.

## Links

- [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md)
- [core+1 mentor component](../mechanisms/core_plus_one_mentor_component.md)
- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [team-size distribution reproduction](team_size_distribution_reproduction.md)
- [team-size tail log binning](../methods/team_size_tail_log_binning.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; SciSciNet: W2109746829; WoS: unknown]

## Metadata

- Concept ID: `low_k_hook_diagnostic`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: small-k hook; low-author-count hook; team-size hook diagnostic; small-team body residual
