# Coauthorship Trace Construction Caveats

## Summary

Coauthorship trace construction caveats are the source-data warnings that coauthorship networks depend on journal extraction, document-type inclusion, name variants, and multi-address anomalies.

## Canonical Form

- Unit of analysis: coauthorship record, author name, address, document type, journal set, or network edge.
- Typical representation: data-construction caveat attached to coauthorship network analysis.
- Validation target: prevent social-network conclusions from being detached from extraction and normalization choices.
- Empirical signature: author names are used as recorded, document types are included or excluded by rule, and multi-address records can overcount ties.

## Uses in Science of Science

- Qualifies [JCR subfield journal-cluster construction](../methods/jcr_subfield_journal_cluster_construction.md).
- Adds data-construction context to [subfield international coauthorship networks](../representations/subfield_international_coauthorship_networks.md).
- Complements [coauthorship country-counting rules](../methods/coauthorship_country_counting_rules.md).
- Connects international collaboration networks to author-disambiguation and address-normalization choices.

## Operationalization

- Record source database, journal set construction, and document-type inclusion rules.
- State whether author-name variants are corrected.
- Audit multi-address and multi-affiliation cases that can overcount international ties.
- Report how these choices affect degree distributions and collaboration shares.

## Evidence and Validations

- Verified full-text evidence from Wagner and Leydesdorff (2005) constructs subfield coauthorship data from SCI records and JCR-based journal clusters.
- The paper states that author names were taken as recorded with no spelling-variant adjustment and that reviews, letters, proceedings, and journal articles were not distinguished.
- Wagner and Leydesdorff also note that same-initial-and-surname errors and multi-address records can introduce overcounting, estimating that about five percent of international documents had more addresses than authors.

## Caveats

- Some construction choices are defensible when the target is social connection rather than article type.
- Uncorrected names and multi-address cases can bias degree and international-edge estimates.
- The caveat should be revisited with modern author IDs, affiliation IDs, and document-type metadata.

## Links

- [JCR subfield journal-cluster construction](../methods/jcr_subfield_journal_cluster_construction.md)
- [subfield international coauthorship networks](../representations/subfield_international_coauthorship_networks.md)
- [coauthorship country-counting rules](../methods/coauthorship_country_counting_rules.md)
- [international collaboration networks](../representations/international_collaboration_networks.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Wagner, C. S., & Leydesdorff, L. (2005). Network structure, self-organization, and the growth of international collaboration in science. *Research Policy*, 34(10), 1608-1618. https://doi.org/10.1016/j.respol.2005.08.002 [OpenAlex: W1964920419; Dimensions: pub.1029657568; SciSciNet: W1964920419; WoS: unknown]

## Metadata

- Concept ID: `coauthorship_trace_construction_caveats`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wagner and Leydesdorff (2005) (2005)
- Latest seen paper: Wagner and Leydesdorff (2005) (2005)
- Primary reference DOI: `10.1016/j.respol.2005.08.002`
- OpenAlex ID: `W1964920419`
- Dimensions ID: `pub.1029657568`
- SciSciNet ID: `W1964920419`
- Aliases: coauthorship data-construction caveats; author-address trace caveat; coauthorship source-record caveat; international coauthor extraction caveat
