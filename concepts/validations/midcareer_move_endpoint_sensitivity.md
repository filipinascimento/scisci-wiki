# Mid-career move endpoint sensitivity

## Summary

Mid-career move endpoint sensitivity checks whether faculty-placement conclusions change when movers are assigned to their first observed employer rather than their most recent employer.

## Canonical Form

- Unit of analysis: faculty member, first employer, most recent employer, placement rank, self-hire status, or mobility event.
- Typical representation: robustness comparison between first-employer and last-employer endpoint definitions.
- Validation target: test whether mid-career moves distort static placement, self-hiring, or upward-mobility measures.
- Empirical signature: field- or domain-level findings remain similar across endpoint choices.

## Uses in Science of Science

- Adds endpoint robustness to [faculty self-hiring rates](../measures/faculty_self_hiring_rates.md).
- Helps interpret [faculty placement rank change](../measures/faculty_placement_rank_change.md) when placement edges mix initial and later jobs.
- Connects faculty placement networks to [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md).

## Operationalization

- Construct placement measures using each faculty member's most recent employer.
- Recompute the same measures using first observed faculty employer.
- Compare self-hiring rates, upward mobility, and prestige-rank patterns by field and domain.
- Report whether mid-career movers materially change conclusions.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) uses most recent employer for movers and then compares first-versus-last employer endpoints.
- The paper reports that mid-career moves do not significantly affect self-hiring or upward-mobility conclusions in fields and domains.
- This supports the stability of its faculty-hiring hierarchy results under endpoint-definition changes.

## Caveats

- First observed employment is not always first academic job when earlier history is missing.
- Endpoint robustness cannot recover unobserved moves outside the panel.
- Individual mobility narratives can still differ even when aggregate rates are stable.

## Links

- [faculty self-hiring rates](../measures/faculty_self_hiring_rates.md)
- [faculty placement rank change](../measures/faculty_placement_rank_change.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty prestige-rank inference](../methods/faculty_prestige_rank_inference.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; SciSciNet: W4296907580; WoS: unknown]

## Metadata

- Concept ID: `midcareer_move_endpoint_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: first-versus-last employer sensitivity; faculty endpoint robustness; mover endpoint sensitivity; placement endpoint audit
