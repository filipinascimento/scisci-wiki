# Astronomy core-journal team panel

## Summary

The astronomy core-journal team panel is a longitudinal article-author corpus used to trace how team-size distributions evolve within a field over five decades.

## Canonical Form

- Unit of analysis: astronomy article, author list, journal, publication period, or article team size.
- Typical representation: field-period distribution of authors per article from a stable set of core journals.
- Data target: observe both the central mass of small teams and the rare large-team tail in a consistent publication corpus.
- Empirical signature: enough longitudinal coverage to compare early Poisson-like team-size distributions with later mixed distributions.

## Uses in Science of Science

- Supplies the empirical target for [team-size distribution reproduction](../validations/team_size_distribution_reproduction.md).
- Provides a field-specific source panel for [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md).
- Provides longitudinal [article team-size distribution](../measures/article_team_size_distribution.md) records rather than only average authors-per-paper summaries.
- Supports separate tracking of [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md) and [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md).
- Complements broader [coauthorship networks](../representations/coauthorship_networks.md) when the research question is authors-per-paper distribution rather than network topology.

## Operationalization

- Select a stable set of field-core journals and collect all research articles over a long time span.
- Extract author counts for each article and bin records into comparable time windows.
- Construct team-size distributions on linear and log-log scales.
- Report field definition, journal coverage, treatment of consortium articles, and period boundaries.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) uses 154,221 astronomy articles published between 1961 and 2010.
- The article states that the empirical corpus comes from four core astronomy journals that publish the majority of research in the field.
- Milojevic maps the simulated article sequence to empirical publication periods, such as 1991-1995 and 2006-2010, to compare simulated and observed distributions.
- The panel reveals that mean astronomy team size rose from 1.5 authors in 1961-1965 to 6.7 authors in 2006-2010, while the distribution also changed shape.

## Caveats

- Core-journal panels are not complete field universes; specialist venues, conference records, and archive-only outputs can be missed.
- Longitudinal comparability depends on stable indexing and author-count extraction.
- Very large collaborations can create visible tail bumps that may reflect specific facilities or consortia rather than a general field process.

## Links

- [team-size distribution reproduction](../validations/team_size_distribution_reproduction.md)
- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [article team-size distribution](../measures/article_team_size_distribution.md)
- [mean team-size distribution-shift caveat](../validations/mean_team_size_distribution_shift_caveat.md)
- [authorship-mode parameter trajectories](../measures/authorship_mode_parameter_trajectories.md)
- [mean team-size growth](../measures/mean_team_size_growth.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [coauthorship source-domain panels](coauthorship_source_domain_panels.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown; SciSciNet: W2109746829]

## Metadata

- Concept ID: `astronomy_core_journal_team_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: astronomy team-size panel; core astronomy journal corpus; astronomy coauthorship team panel; article team-size panel
