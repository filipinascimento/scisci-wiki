# Bibliographic coupling

## Summary

Bibliographic coupling relates two works by the references they share, treating common cited sources as evidence of topical or intellectual proximity.

## Canonical Form

- Unit of analysis: papers, patents, authors, journals, or fields.
- Typical representation: weighted undirected network among citing items.
- Mechanism or measurement target: prospective similarity in knowledge base at publication time.
- Empirical signature: recent papers in the same research front share many references.

## Uses in Science of Science

- Useful for clustering recent papers because it does not require waiting for later co-citations.
- Often used to detect emerging research fronts, science maps, and topic structure.
- Complements co-citation and semantic similarity.
- At journal or source level, belongs to the broader [journal similarity mapping](../methods/journal_similarity_mapping.md) family of science-map inputs.

## Operationalization

- Inputs: reference lists for focal works.
- Measures: shared-reference counts, cosine/Jaccard similarity, bibliographic-coupling strength, clusters.
- Common model forms: weighted networks and community detection.

## Evidence and Validations

- Kessler introduced bibliographic coupling; the original American Documentation full text remains blocked through the DOI, Wiley, ASISDL, LibKey, ScienceDirect-style, ProQuest institution-selection, and publisher PDF routes checked in ingestion passes, and OpenAlex, Semantic Scholar, and Unpaywall report no repository full text. Kessler (1963) therefore stays the chronology anchor rather than a verified local full-text source.
- Verified full-text evidence from Hummon and Doreian (1989) restates the core definition: two articles are similar to the extent that they share citations to common sources, making the coupling relation static and defined by the authors' bibliographies.
- Hummon and Doreian contrast bibliographic coupling with co-citation: bibliographic coupling uses reference lists fixed at publication time, while co-citation changes as later authors jointly cite earlier documents.
- Verified full-text evidence from Small (1973) gives the originating contrast from the co-citation side: co-citation depends on later citing authors and can drift over time, while bibliographic coupling is fixed by references in the coupled documents.
- Small's particle-physics example also supports [co-citation bibliographic-coupling divergence](../validations/co_citation_bibliographic_coupling_divergence.md): strong co-citation can appear where shared-reference coupling is weak or absent.
- Verified full-text evidence from Waltman (2016) shows a later evaluation use: bibliographic coupling can select thematically similar publications through shared references for article-level citation normalization without relying only on field categories.
- Boyack, Klavans, and Borner's verified full text provides adjacent science-map evidence: it compares multiple journal-similarity measures over 7,121 journals and more than one million documents to evaluate local and global map accuracy.

## Caveats

- Shared references can reflect methods or broad background rather than specific topical similarity.
- Reference-list length and field citation norms require normalization.
- Coupling strength is static for a pair of published papers unless reference metadata are corrected, while the scientific meaning of the pair can still change over time.

## Links

- [citation networks](../representations/citation_networks.md)
- [co citation](../representations/co_citation.md)
- [co-citation strength](../measures/co_citation_strength.md)
- [co-citation bibliographic-coupling divergence](../validations/co_citation_bibliographic_coupling_divergence.md)
- [direct-citation co-citation overlap](../validations/direct_citation_co_citation_overlap.md)
- [temporal co-citation drift](../mechanisms/temporal_co_citation_drift.md)
- [research fronts](../mechanisms/research_fronts.md)
- [science maps](science_maps.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [main path analysis](../methods/main_path_analysis.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [semantic embeddings](../representations/semantic_embeddings.md)

## References

- Kessler, M. M. (1963). Bibliographic coupling between scientific papers. *American Documentation*, 14(1), 10-25. https://doi.org/10.1002/asi.5090140103 [OpenAlex: W1970859146; Dimensions: pub.1045420420; WoS: unknown]
- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]
- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `bibliographic_coupling`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Kessler (1963) (1963)
- Latest seen paper: Fortunato et al. (2018) (2018)
- Primary reference DOI: `10.1002/asi.5090140103`
- OpenAlex ID: `W1970859146`
- Dimensions ID: `pub.1045420420`
- SciSciNet ID: `W1970859146`
- Aliases: shared-reference similarity; coupling network
