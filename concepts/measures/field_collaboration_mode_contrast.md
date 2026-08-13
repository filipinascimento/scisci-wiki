# Field collaboration-mode contrast

## Summary

Field collaboration-mode contrast compares collaboration statistics across disciplines to reveal how experimental, theoretical, and source-specific research modes shape team sizes and coauthor networks.

## Canonical Form

- Unit of analysis: field, source-domain panel, paper, author, team, or coauthorship network.
- Typical representation: authors per paper, collaborators per author, papers per author, component size, path length, clustering, assortativity, and source coverage by field.
- Measurement target: field differences in how research labor is organized and documented through coauthorship.
- Empirical signature: domains differ substantially in average team size and collaborator counts even when they have comparable papers-per-author rates.

## Uses in Science of Science

- Turns [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md) into field-comparison evidence rather than a single pooled network.
- Provides covariates for [coauthorship networks](../representations/coauthorship_networks.md), [collaboration assortativity](collaboration_assortativity.md), and [collaboration clustering coefficient](collaboration_clustering_coefficient.md).
- Helps avoid treating collaboration statistics from one source domain as universal.
- Connects collaboration structure to field organization, instrumentation, team labor, and publication norms.

## Operationalization

- Build comparable author-paper panels by field or source domain.
- Compute papers per author, authors per paper, average collaborators, largest-component share, path length, clustering, and assortativity.
- Interpret field differences together rather than relying on one statistic.
- Report differences in time windows and source coverage before comparing domains.
- Document the source-domain panel and [collaboration fixed time window](../methods/collaboration_fixed_time_window.md) before interpreting contrasts.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) compares collaboration networks built from Medline, Los Alamos e-Print Archive, SPIRES, and NCSTRL for 1995-1999, showing large differences in authors per paper and collaborators per author between theoretical and experimental fields.
- Newman (2001) reports especially large projected collaborator counts in high-energy physics, motivating [mega-collaboration degree inflation](../validations/mega_collaboration_degree_inflation.md) as a field-contrast caveat.
- Newman (2001) also reports lower MEDLINE clustering and proposes [biomedical lab-hierarchy clustering caveat](../validations/biomedical_lab_hierarchy_clustering_caveat.md) as one field-organization explanation.
- The same PNAS paper motivates [collaborator exponent dominance regime](collaborator_exponent_dominance_regime.md) and [lab-director degree-inflation signature](../validations/lab_director_degree_inflation_signature.md) as additional ways to interpret field contrasts.
- Verified full-text evidence from Newman (2004) compares coauthorship networks from Medline biomedical research, the Physics E-print Archive, and Mathematical Reviews.
- The paper reports that biology has many more authors and more collaborators per scientist than physics or mathematics.
- Newman interprets this as reflecting differences in modes of research, with biology often involving large groups of laboratory scientists and mathematics often involving individual or pair-based theoretical work.
- The table reports field contrasts in authors per paper, average collaborators, largest-component share, average distance, clustering, and assortativity.

## Caveats

- Field contrasts mix true labor organization with source coverage, database age, and author-name disambiguation.
- Broad fields can contain subfields with very different team norms.
- Authors per paper does not directly measure contribution equality or collaboration intensity.

## Links

- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [collaboration fixed time window](../methods/collaboration_fixed_time_window.md)
- [collaboration source coverage bias](../validations/collaboration_source_coverage_bias.md)
- [mega-collaboration degree inflation](../validations/mega_collaboration_degree_inflation.md)
- [collaborator exponent dominance regime](collaborator_exponent_dominance_regime.md)
- [lab-director degree-inflation signature](../validations/lab_director_degree_inflation_signature.md)
- [collaborator-count distribution](collaborator_count_distribution.md)
- [papers-per-author distribution](papers_per_author_distribution.md)
- [collaboration clustering coefficient](collaboration_clustering_coefficient.md)
- [biomedical lab-hierarchy clustering caveat](../validations/biomedical_lab_hierarchy_clustering_caveat.md)
- [collaboration assortativity](collaboration_assortativity.md)
- [single-journal coauthorship coverage bias](../validations/single_journal_coauthorship_coverage_bias.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]
- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `field_collaboration_mode_contrast`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1103/PhysRevE.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: field collaboration contrast; disciplinary team-mode contrast; authors-per-paper field contrast; collaboration mode comparison
