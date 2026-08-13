# Team retirement/dissolution ablation

## Summary

Team retirement/dissolution ablation is the validation motif that generative team models should test whether author retirement and team dissolution rules materially affect the target distribution.

## Canonical Form

- Unit of analysis: simulation rule, author retirement, team dissolution, team-size distribution, or model ablation.
- Typical representation: with-retirement run, no-retirement run, dissolution rule, distributional fit, or side-effect audit.
- Validation target: distinguish essential generative mechanisms from dispensable realism.
- Empirical signature: a model reproduces team-size distributions similarly with and without retirement or dissolution rules.

## Uses in Science of Science

- Extends [component ablation fit validation](component_ablation_fit_validation.md).
- Tests scope of [core team retention assumption](core_team_retention_assumption.md).
- Connects team-size modeling to [team core-turnover survival strategy](../mechanisms/team_core_turnover_survival_strategy.md) and [inactive agent turnover rule](../methods/inactive_agent_turnover_rule.md).

## Operationalization

- Rerun simulations with retirement and dissolution rules removed.
- Compare fit to team-size distribution, author productivity distribution, and coauthorship network structure.
- Report whether a rule is essential for the target distribution or only for secondary outcomes.
- Test rule sensitivity across fields and time periods.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) includes retirement and team dissolution in the model but notes they are not essential for reproducing the empirical team-size distribution.
- This motivates explicit ablation rather than assuming every realistic rule drives the main result.

## Caveats

- A rule can be nonessential for team size but important for career histories or network turnover.
- Ablation results depend on which outcome is targeted.
- Retirement and inactivity are difficult to observe directly in publication data.

## Links

- [core team retention assumption](core_team_retention_assumption.md)
- [component ablation fit validation](component_ablation_fit_validation.md)
- [team core-turnover survival strategy](../mechanisms/team_core_turnover_survival_strategy.md)
- [inactive agent turnover rule](../methods/inactive_agent_turnover_rule.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown]

## Metadata

- Concept ID: `team_retirement_dissolution_ablation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: retirement-rule team-model ablation; team dissolution sensitivity; inactive-author ablation
