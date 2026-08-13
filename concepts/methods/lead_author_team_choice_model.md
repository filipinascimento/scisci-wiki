# Lead-author team choice model

## Summary

Lead-author team choice model represents paper production as repeated choices by a lead author between publishing with a retained core team or an extended team.

## Canonical Form

- Unit of analysis: lead author, paper, core team, extended team, publication event, or field-period simulation.
- Typical representation: agent-based publication sequence with core-team draws, repeated lead-author publication, extended-team choice probability, and productivity-proportional membership growth.
- Method target: generate empirical article-team-size distributions from author-level team-formation rules rather than fitting only an aggregate curve.
- Empirical signature: simulated publication histories reproduce both small-team hooks and large-team tails over time.

## Uses in Science of Science

- Gives the generative layer beneath [team-size distribution decomposition](team_size_distribution_decomposition.md).
- Connects [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md), [core+1 mentor component](../mechanisms/core_plus_one_mentor_component.md), and [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md) in one simulation workflow.
- Separates the probability of using an extended team from [extended-team choice propensity](../measures/extended_team_choice_propensity.md).
- Provides a reusable modeling pattern for collaboration studies that want to move from [article team-size distribution](../measures/article_team_size_distribution.md) to generative mechanisms.
- Supports validation through [team-size distribution reproduction](../validations/team_size_distribution_reproduction.md).

## Operationalization

- Initialize lead authors and draw each lead author's core-team size from a Poisson process, with optional core+1 formation.
- Allow previously publishing authors to publish again with a specified repeat-publication probability.
- Give each lead author both a core team and an extended team that begins from the core team.
- For each paper, choose whether the lead author uses the core team or extended team.
- Grow extended teams by adding members in proportion to aggregate lead-author productivity of current members.
- Map the simulated article sequence to empirical time periods and compare distributions by period.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) specifies a simulation in which each paper has a lead author responsible for assembling the team and producing the paper.
- Core-team size is drawn from a Poisson distribution, while existing authors who publish again retain their original core teams.
- Extended teams start as core teams and then add members dynamically in proportion to aggregate productivity of current members.
- The simulation fixes the number of generated articles to match 154,221 astronomy articles from 1961-2010 and maps article sequence ranges to empirical publication periods.
- Milojevic reports that the model closely reproduces astronomy team-size distributions across 1961-1965, 1991-1995, and 2006-2010.

## Caveats

- The lead-author abstraction hides cases with distributed leadership, alphabetical author order, or consortium authorship.
- The model does not observe actual team-formation decisions; it tests whether simple rules can reproduce distributions.
- Parameters such as repeat-publication probability and extended-team choice probability should be documented when comparing fields.

## Links

- [team-size distribution decomposition](team_size_distribution_decomposition.md)
- [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md)
- [core+1 mentor component](../mechanisms/core_plus_one_mentor_component.md)
- [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md)
- [extended-team choice propensity](../measures/extended_team_choice_propensity.md)
- [core-team retention assumption](../validations/core_team_retention_assumption.md)
- [team-size distribution reproduction](../validations/team_size_distribution_reproduction.md)
- [article team-size distribution](../measures/article_team_size_distribution.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown; SciSciNet: W2109746829]

## Metadata

- Concept ID: `lead_author_team_choice_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: lead-author team simulation; core extended team choice model; publication-sequence team model; article team assembly simulation
