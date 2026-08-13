# H-index calculability affordance

## Summary

The h-index became attractive partly because it was easy to calculate from citation-database interfaces, making computational convenience part of the metric's adoption pathway.

## Canonical Form

- Unit of analysis: metric implementation, database interface, or evaluation workflow.
- Typical representation: sortable citation-count list and reproducible h boundary.
- Method target: the practical affordance that lets users compute an indicator with minimal processing.
- Empirical signature: rapid uptake or platform implementation when the required fields are directly exposed.

## Uses in Science of Science

- Connects the [h-index](../measures/h_index.md) to [citation database web interface access](citation_database_web_interface_access.md).
- Helps explain why simple indicators can spread even when richer measures exist.
- Useful for studying how database product design shapes research evaluation practice.

## Operationalization

- Document query fields, author-disambiguation choices, sorting behavior, citation-source scope, tie handling, and date of database access.
- Compare manual interface calculation with scripted calculation from exported records.
- Record platform-specific implementation details when reproducing historical h-index values.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) describes sorting a researcher's Web of Science records by times cited to obtain h and emphasizes that the index is easily computable.
- The paper's adoption logic therefore includes database usability as well as measurement rationale.

## Caveats

- Ease of calculation can encourage metric overuse or shortcut assessment.
- Interface calculations can hide database coverage, author identity, and citation-source assumptions.

## Links

- [Citation database web-interface access](citation_database_web_interface_access.md)
- [Web of Science](../datasets/web_of_science.md)
- [Career-spanning citation-source coverage](career_spanning_citation_source_coverage.md)
- [Assessment convenience-proxy drift](../mechanisms/assessment_convenience_proxy_drift.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]

## Metadata

- Concept ID: `h_index_calculability_affordance`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: h-index interface computability; metric calculability affordance; citation interface metric adoption
