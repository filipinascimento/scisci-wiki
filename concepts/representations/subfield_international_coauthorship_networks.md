# Subfield international coauthorship networks

## Summary

Subfield international coauthorship networks represent cross-country or cross-border collaboration within a narrowly defined scientific subfield rather than across all science.

## Canonical Form

- Unit of analysis: author, country, subfield, journal set, paper, or international coauthorship tie.
- Typical representation: author-author or country-country graph restricted to internationally coauthored papers in a subfield.
- Mechanism or measurement target: field-specific organization of international collaboration.
- Empirical signature: different subfields show different degrees of centralization, clustering, scale-free structure, and policy dependence.

## Uses in Science of Science

- Tests whether global [international collaboration networks](international_collaboration_networks.md) arise from field-level dynamics.
- Supports comparisons across organizational regimes such as megascience, coordinated research, resource-dependent research, and participatory research.
- Provides the empirical layer for the [collaboration organizing-driver quadrants](collaboration_organizing_driver_quadrants.md).
- Provides the data layer for [international collaboration preferential attachment](../mechanisms/international_collaboration_preferential_attachment.md), [international collaboration small-world structure](international_collaboration_small_world.md), and [continuant collaborators](../mechanisms/continuant_collaborators.md).

## Operationalization

- Define a subfield with journals, topics, field categories, or expert-curated sources.
- Use [JCR subfield journal-cluster construction](../methods/jcr_subfield_journal_cluster_construction.md) when the subfield is defined through Journal Citation Reports citation environments.
- Extract papers for a specific year or time window from a bibliographic database.
- Keep author names and affiliation countries, then subset to internationally coauthored records.
- Build author-level or country-level coauthorship graphs and compute degree distributions, clustering, and network visualizations.

## Evidence and Validations

- Verified full-text evidence from Wagner and Leydesdorff (2005) builds six subfield cases from Science Citation Index 2000 data.
- They identify journal clusters using Journal Citation Reports, collect 19,147 articles from 65 journals, and analyze author names and addresses for international coauthorship.
- The six subfields are chosen to cover different organizational drivers: astrophysics, virology, geophysics, soil science, mathematical logic, and polymer science.
- Their corpus construction is split out as [JCR subfield journal-cluster construction](../methods/jcr_subfield_journal_cluster_construction.md), because journal-cluster selection, document-type handling, and author-name handling are reusable methodological choices.

## Caveats

- Journal-set definitions can miss subfield papers outside the selected journals.
- Author-name spelling variants and affiliation parsing can distort network nodes and edges.
- One-year slices capture structure at a moment but may miss entry, exit, and temporal partner switching.

## Links

- [international collaboration networks](international_collaboration_networks.md)
- [coauthorship networks](coauthorship_networks.md)
- [collaboration organizing-driver quadrants](collaboration_organizing_driver_quadrants.md)
- [international collaboration explanation matrix](../methods/international_collaboration_explanation_matrix.md)
- [JCR subfield journal-cluster construction](../methods/jcr_subfield_journal_cluster_construction.md)
- [coauthorship country-counting rules](../methods/coauthorship_country_counting_rules.md)
- [international collaboration preferential attachment](../mechanisms/international_collaboration_preferential_attachment.md)
- [international collaboration small-world structure](international_collaboration_small_world.md)
- [continuant collaborators](../mechanisms/continuant_collaborators.md)
- [international coauthorship share](../measures/international_coauthorship_share.md)
- [Web of Science](../datasets/web_of_science.md)
- [field classifications](../measures/field_classifications.md)

## References

- Wagner, C. S., & Leydesdorff, L. (2005). Network structure, self-organization, and the growth of international collaboration in science. *Research Policy*, 34(10), 1608-1618. https://doi.org/10.1016/j.respol.2005.08.002 [OpenAlex: W1964920419; Dimensions: pub.1029657568; WoS: unknown]

## Metadata

- Concept ID: `subfield_international_coauthorship_networks`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Wagner and Leydesdorff (2005) (2005)
- Latest seen paper: Wagner and Leydesdorff (2005) (2005)
- Primary reference DOI: `10.1016/j.respol.2005.08.002`
- OpenAlex ID: `W1964920419`
- Dimensions ID: `pub.1029657568`
- SciSciNet ID: `W1964920419`
- Aliases: subfield ICS networks; field-level international coauthorship; international subfield collaboration graph; subfield coauthor network
