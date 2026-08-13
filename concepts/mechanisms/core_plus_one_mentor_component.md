# Core+1 mentor component

## Summary

The core+1 mentor component is a shifted small-team authorship mode that accounts for excess two-author papers, often interpreted as mentor-assisted early authorship.

## Canonical Form

- Unit of analysis: lead author, article team, core team, student-mentor pair, or small-team distribution.
- Typical representation: Poisson core-team component shifted by one extra member.
- Mechanism: some lead authors who would otherwise publish alone or in small core teams add an extra collaborator, plausibly a mentor or senior advisor.
- Empirical signature: two-author papers exceed what a standard small-team Poisson component predicts.

## Uses in Science of Science

- Refines [core-team Poisson mode](core_team_poisson_mode.md) by separating ordinary small teams from a dyadic excess component.
- Links team-size modeling to [mentorship and chaperone effects](mentorship_chaperone_effects.md) without requiring author-order histories.
- Adds interpretability to [authorship-mode contribution share](../measures/authorship_mode_contribution_share.md) and [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md).
- Helps avoid treating all small-team growth as one homogeneous collaboration process.

## Operationalization

- Fit a standard Poisson component and inspect whether two-author teams are overrepresented relative to one-author teams.
- Add a shifted Poisson component whose support starts at two authors.
- Track the fitted share and rate of this component over time and across fields.
- Interpret mentor mechanisms cautiously unless career stage, advisor links, or author-role evidence are available.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) adds a "core +1" team type to reproduce the excess of two-author papers in recent astronomy.
- The paper notes that the pattern is especially visible among authors who have just started publishing and suggests that such authors may include mentors as coauthors.
- In the 2006-2010 astronomy decomposition, core+1 teams account for a smaller but nontrivial share of articles compared with standard core teams and extended teams.
- Milojevic reports that mathematics and social psychology have especially large core+1 shares in the cross-field decomposition.

## Caveats

- The mentor interpretation is plausible but indirect; dyads can also be peers, instrument collaborations, or field-norm artifacts.
- Author order, career stage, and advisor records are needed before labeling individual dyads as mentorship.
- The component is a distributional approximation, not an observed role label.

## Links

- [core-team Poisson mode](core_team_poisson_mode.md)
- [authorship-mode contribution share](../measures/authorship_mode_contribution_share.md)
- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [authorship-mode parameter trajectories](../measures/authorship_mode_parameter_trajectories.md)
- [mentorship and chaperone effects](mentorship_chaperone_effects.md)
- [early-career sponsorship by top scientists](early_career_sponsorship.md)
- [venue chaperone effect](venue_chaperone_effect.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown; SciSciNet: W2109746829]

## Metadata

- Concept ID: `core_plus_one_mentor_component`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: core plus one teams; shifted Poisson team component; two-author mentor component; student-mentor team-size excess
