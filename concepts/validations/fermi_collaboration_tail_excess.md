# Fermi collaboration tail excess

## Summary

Fermi collaboration tail excess is a validation caveat that a small number of mega-collaboration papers can create visible bumps in the far tail of a team-size distribution.

## Canonical Form

- Unit of analysis: field-period team-size distribution, mega-collaboration, author-count tail, consortium paper, or fitted residual.
- Typical representation: far-tail residual check, large-team outlier audit, collaboration-specific tail annotation, or thresholded mega-team sensitivity.
- Validation target: distinguish broad extended-team growth from localized outliers caused by a specific scientific collaboration.
- Empirical signature: a model fits most of the distribution but systematically misses an isolated bump at very large team sizes.

## Uses in Science of Science

- Adds a team-size distribution caveat to [mean team-size distribution-shift caveat](mean_team_size_distribution_shift_caveat.md).
- Complements [mega-collaboration degree inflation](mega_collaboration_degree_inflation.md), which focuses on coauthorship-network projection rather than distribution fitting.
- Qualifies [team-size distribution reproduction](team_size_distribution_reproduction.md) and [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md) when very large collaborations are present.
- Helps decide whether to report large-team tails as continuous fitted processes or as a mixture of extended teams and named consortia.

## Operationalization

- Inspect residuals between empirical and fitted team-size distributions in the far tail.
- Identify whether excess mass corresponds to a specific collaboration, instrument, facility, or consortium.
- Report the share of papers above large-team thresholds separately from fitted distribution parameters.
- Refit with and without the named collaboration when claims depend on tail slope or mean team size.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) notes that the strongest departure from the astronomy simulation is a bump in the far tail of the 2006-2010 distribution around team size 200.
- The paper identifies this excess as several papers published by a Fermi collaboration over a short period.
- Milojevic also reports that only 0.6% of 2006-2010 astronomy papers were published by teams with more than 100 authors.
- This evidence shows that a visible tail feature can be substantively important while still representing a tiny fraction of the article count.

## Caveats

- Named collaborations are real organizational forms and should not automatically be discarded as noise.
- A far-tail bump can affect means and network projections even when it barely affects article shares.
- Collaboration-specific tail features require field knowledge or metadata beyond author-count distributions.

## Links

- [team-size distribution reproduction](team_size_distribution_reproduction.md)
- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [mean team-size distribution-shift caveat](mean_team_size_distribution_shift_caveat.md)
- [mega-collaboration degree inflation](mega_collaboration_degree_inflation.md)
- [extended-team minority mean leverage](extended_team_minority_mean_leverage.md)
- [astronomy core-journal team panel](../datasets/astronomy_core_journal_team_panel.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown; SciSciNet: W2109746829]

## Metadata

- Concept ID: `fermi_collaboration_tail_excess`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: Fermi tail bump; mega-collaboration tail residual; astronomy author-count tail excess; large-collaboration distribution bump
