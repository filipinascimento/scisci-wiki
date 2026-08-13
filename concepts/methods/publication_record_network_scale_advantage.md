# Publication-Record Network Scale Advantage

## Summary

Publication-record network scale advantage is the methodological benefit of using publication databases to reconstruct large, consistently defined collaboration networks.

## Canonical Form

- Unit of analysis: publication database, author name, coauthorship edge, field panel, or time window.
- Typical representation: large coauthorship graph from paper records.
- Method target: obtain scalable and reproducible social-network data without eliciting every tie directly.
- Empirical signature: millions of papers or authors can be mapped under a consistent coauthorship rule.

## Uses in Science of Science

- Justifies [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md).
- Provides infrastructure logic for [coauthorship networks](../representations/coauthorship_networks.md).
- Connects [full-database bibliometric access](full_database_bibliometric_access.md) to network measurement.

## Operationalization

- Select publication databases and a time window.
- Define coauthorship as the edge rule.
- Construct author nodes, paper groups, and projected author-author ties.
- Report the source-domain coverage and author-name resolution approach.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) presents scientific collaboration as a large human-acquaintance network documented in written papers.
- The paper constructs collaboration graphs from MEDLINE, the Los Alamos e-Print Archive, SPIRES, and NCSTRL.
- The databases range from millions of papers in MEDLINE to smaller computer-science and physics archives, enabling much larger maps than ordinary self-report studies.

## Caveats

- Publication records miss informal collaboration and nonpublishing ties.
- Name disambiguation and source coverage remain central constraints.
- Scale does not by itself prove social-contact validity.

## Links

- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [full-database bibliometric access](full_database_bibliometric_access.md)
- [scholarly data lakes](../datasets/scholarly_data_lakes.md)
- [self-report network mapping limits](../validations/self_report_network_mapping_limits.md)

## References

- Newman, M. E. J. (2001). The structure of scientific collaboration networks. *Proceedings of the National Academy of Sciences*, 98(2), 404-409. https://doi.org/10.1073/pnas.98.2.404 [OpenAlex: W2125315567; Dimensions: pub.1018280471; SciSciNet: W2125315567; WoS: unknown]

## Metadata

- Concept ID: `publication_record_network_scale_advantage`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1073/pnas.98.2.404`
- OpenAlex ID: `W2125315567`
- Dimensions ID: `pub.1018280471`
- SciSciNet ID: `W2125315567`
- Aliases: bibliometric network scale advantage; publication-trace network mapping; paper-record social graph method; large-scale coauthorship reconstruction
