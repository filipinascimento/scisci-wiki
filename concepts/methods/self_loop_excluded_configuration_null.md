# Self-loop-excluded configuration null

## Summary

Rewires faculty hiring networks while excluding self-hires from randomization so excess self-loops do not become artificial inter-university placements.

## Canonical Form

- Unit of analysis: faculty hiring network null model.
- Typical representation: configuration-model rewiring of interinstitutional edges with self-loops handled separately.
- Method target: null distribution for hierarchy, upward mobility, or self-hiring without distorting self-loops.
- Empirical signature: self-hires remain in denominators but are not randomized into cross-institution edges.

## Uses in Science of Science

- Refines [faculty hiring null models](faculty_hiring_null_models.md) for self-hire-heavy networks.
- Connects [faculty self-hiring rates](../measures/faculty_self_hiring_rates.md) to hierarchy inference.
- Useful when self-loops have distinct substantive meaning from ordinary placements.

## Operationalization

- Remove self-loops before configuration-model rewiring and preserve interinstitutional in/out degrees.
- Rerank null networks and document how self-hires enter hierarchy denominators.
- Compare results with and without self-loop exclusion where interpretation depends on it.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) warns that randomizing self-hires would distort SpringRank ranks and the null distribution while self-hires remain in hierarchy-denominator calculations.
- This supports a self-loop-specific null-model rule.

## Caveats

- The null still ignores geography, field demand, institutional mission, and applicant preferences.
- Self-loop treatment should match the specific hypothesis being tested.

## Links

- [Faculty hiring null models](faculty_hiring_null_models.md)
- [Faculty self-hiring rates](../measures/faculty_self_hiring_rates.md)
- [Faculty hierarchy strength](../measures/faculty_hierarchy_strength.md)
- [Faculty prestige-rank inference](faculty_prestige_rank_inference.md)
- [Faculty hiring networks](../representations/faculty_hiring_networks.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `self_loop_excluded_configuration_null`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: self-hire excluded configuration null; faculty self-loop null model; placement network self-loop rewiring rule
