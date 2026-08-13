# SciSciNet patent-citation family deduplication

## Summary

Patent-to-paper citation pairs are deduplicated after mapping affiliated MAG records into primary paper families.

## Canonical Form

- Unit of analysis: primary PaperID, affiliated paper record, patent ID, patent citation, paper family, or duplicate link.
- Typical representation: paper-family-aware patent citation cleanup table.
- Mechanism, measurement, or validation target: deduplication of science-to-technology citation links.
- Empirical signature: duplicate patent-paper pairs disappear after affiliated paper records are merged to primary PaperIDs.

## Uses in Science of Science

- Refines SciSciNet patent-link methods by linking it to [patent citation to science link table](../datasets/patent_citation_to_science_link_table.md) and [patent paper links](../datasets/patent_paper_links.md).
- Useful as a reusable check when [paper family canonicalization](paper_family_canonicalization.md) is used in science-of-science inference.
- Creates cross-links to [citation reference count redistribution](citation_reference_count_redistribution.md) so the motif is not interpreted in isolation.

## Operationalization

- Map affiliated MAG paper records to primary PaperIDs.
- Merge patent citations from affiliated records into the primary paper family.
- Remove duplicate primary-PaperID and PatentID pairs while preserving source scope.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) says patent citations received by affiliated MAG papers are merged to primary IDs and duplicate primary-paper/patent pairs are dropped.
- The method protects patent-link counts from duplicate paper-family inflation.

## Caveats

- The linkage is limited to USPTO/EPO patent citations in the Marx-Fuegi corpus.
- Recent patent citations after the released snapshot are absent.

## Links

- [Patent citation-to-science link table](../datasets/patent_citation_to_science_link_table.md)
- [Patent-paper links](../datasets/patent_paper_links.md)
- [Paper-family canonicalization](paper_family_canonicalization.md)
- [Citation/reference count redistribution](citation_reference_count_redistribution.md)
- [Integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [External linkage source-scope caveat](../validations/external_linkage_source_scope_caveat.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `sciscinet_patent_citation_family_deduplication`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: patent-PaperID deduplication; paper-family patent merge; primary-paper patent citation cleanup
