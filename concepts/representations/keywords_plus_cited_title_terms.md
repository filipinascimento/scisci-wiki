# Keywords Plus cited-title terms

## Summary

Keywords Plus cited-title terms represent topical keywords extracted from the titles of cited articles, adding a citation-derived text layer to indexed publication records.

## Canonical Form

- Unit of analysis: publication record, cited article title, extracted keyword, topic term, source collection, or keyword field.
- Typical representation: keyword list, cited-title term vector, topic-feature field, or citation-derived controlled vocabulary supplement.
- Representation target: add topical descriptors derived from a paper's cited-reference environment.
- Empirical signature: terms are not necessarily author-supplied; they are extracted from titles of works cited by the focal publication.

## Uses in Science of Science

- Adds a citation-derived text representation to [Web of Science](../datasets/web_of_science.md) records.
- Complements [document-topic mixtures](document_topic_mixtures.md), [title-abstract paper embeddings](title_abstract_paper_embeddings.md), and [citation informed paper embeddings](citation_informed_paper_embeddings.md).
- Gives [reference set construction](../methods/reference_set_construction.md) and topic-search workflows another feature source.
- Supports audits of how database-native keyword fields differ from author keywords or controlled vocabularies.

## Operationalization

- Extract cited article titles from a publication's reference list.
- Identify recurring or salient title terms and store them in a keyword field.
- Keep author keywords, controlled vocabulary terms, and cited-title-derived terms separate.
- Evaluate whether the field improves retrieval, topic assignment, or science-map construction.
- Treat the representation as source-native metadata with its own coverage and update rules.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) lists Web of Science keyword fields, including Author Keywords and Keywords Plus.
- The paper states that Keywords Plus are extracted from the titles of cited articles.
- Birkle et al. place Keywords Plus under Core Collection controlled-vocabulary and keyword-field information, distinguishing it from controlled indexing available in some specialist platform databases.
- The description makes Keywords Plus a citation-derived representation rather than a manually supplied author label.

## Caveats

- Cited-title terms inherit biases from reference-list composition and cited-source coverage.
- The field may emphasize background literature rather than the focal paper's own contribution.
- Keywords Plus should not be merged with author keywords without marking provenance.

## Links

- [Web of Science](../datasets/web_of_science.md)
- [full cited-reference indexing](../datasets/full_cited_reference_indexing.md)
- [document-topic mixtures](document_topic_mixtures.md)
- [title-abstract paper embeddings](title_abstract_paper_embeddings.md)
- [citation informed paper embeddings](citation_informed_paper_embeddings.md)
- [paper-field linkages](paper_field_linkages.md)
- [field classifications](../measures/field_classifications.md)
- [science maps](science_maps.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `keywords_plus_cited_title_terms`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: Keywords Plus; cited-title keywords; citation-derived keyword terms; reference-title keyword field
