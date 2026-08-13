# Open-citation dependency boundary

## Summary

Citation graph completeness depends on publisher reference deposits, I4OC openness, direct publisher participation, and legally mineable open-access full text.

## Canonical Form

- Unit of analysis: citation edge, reference list, publisher deposit, I4OC record, HTML extraction, PDF extraction, or open-access full text.
- Typical representation: citation-edge provenance table keyed to source channel.
- Mechanism, measurement, or validation target: coverage boundary for citation networks built from mixed reference sources.
- Empirical signature: citation edges are missing or noisier when reference lists are closed, incomplete, or only recoverable through extraction.

## Uses in Science of Science

- Refines citation-coverage validation by linking it to [citation networks](../representations/citation_networks.md) and [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).
- Useful as a reusable check when [open access resolver workflows](../methods/open_access_resolver_workflows.md) is used in science-of-science inference.
- Creates cross-links to [open access evidence locations](../representations/open_access_evidence_locations.md) so the motif is not interpreted in isolation.

## Operationalization

- Record source channel for each citation edge: Crossref/I4OC, publisher-supplied reference list, HTML/PDF extraction, or open-access text mining.
- Compare citation coverage across publishers and access states.
- Separate node coverage from citation-relation coverage in database evaluations.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) says Dimensions would have been harder and more error-prone without I4OC and that remaining publishers required direct extraction from HTML or PDF.
- The motif makes reference availability a relation-level coverage boundary.

## Caveats

- Closed or poorly formatted references create coverage gaps and source-dependent error profiles.
- Open citation availability can vary by publisher, year, and document type.

## Links

- [Citation networks](../representations/citation_networks.md)
- [Citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [Open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [Open access evidence locations](../representations/open_access_evidence_locations.md)
- [Scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [Publication backbone access-coverage tradeoff](publication_backbone_access_coverage_tradeoff.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `open_citation_dependency_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: citation source dependency; I4OC coverage boundary; reference availability constraint
