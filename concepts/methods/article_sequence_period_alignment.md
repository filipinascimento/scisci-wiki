# Article-sequence period alignment

## Summary

Article-sequence period alignment maps simulated publication order to empirical time windows by cumulative article counts so model outputs can be compared period by period.

## Canonical Form

- Unit of analysis: simulated article, empirical period, cumulative article index, model run, or distributional comparison.
- Typical representation: article index interval, mapped calendar period, cumulative output alignment, or sequence-to-period crosswalk.
- Method target: compare dynamic simulations with empirical distributions when the simulation generates ordered articles rather than calendar dates.
- Empirical signature: simulated article ranges are assigned to observed publication windows before comparing team-size distributions.

## Uses in Science of Science

- Supports [lead-author team choice model](lead_author_team_choice_model.md) validation over time.
- Links [astronomy core-journal team panel](../datasets/astronomy_core_journal_team_panel.md) to simulated sequence output.
- Complements [team-size distribution reproduction](../validations/team_size_distribution_reproduction.md) and [postwar analytic-window guardrail](postwar_analytic_window_guardrail.md).

## Operationalization

- Preserve simulated article sequence numbers.
- Use empirical cumulative article counts to map sequence intervals onto calendar periods.
- Compare observed and simulated distributions within each aligned interval.
- Report whether output growth rates are treated as exogenous to the alignment.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) maps simulated article sequence ranges to empirical windows such as 1991-1995 for validation.
- This allows the model's generated team-size distribution to be compared with observed period-specific distributions.

## Caveats

- Sequence order may not fully capture calendar-time changes in policy, instrumentation, or field composition.
- Alignment assumes the empirical output volume is the appropriate clock.
- It can hide within-window shocks.

## Links

- [lead-author team choice model](lead_author_team_choice_model.md)
- [astronomy core-journal team panel](../datasets/astronomy_core_journal_team_panel.md)
- [team-size distribution reproduction](../validations/team_size_distribution_reproduction.md)
- [postwar analytic-window guardrail](postwar_analytic_window_guardrail.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown]

## Metadata

- Concept ID: `article_sequence_period_alignment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: simulated article-period crosswalk; cumulative-output time alignment; publication-sequence validation mapping
